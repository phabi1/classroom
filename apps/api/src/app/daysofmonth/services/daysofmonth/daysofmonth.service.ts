import { Injectable, Scope } from '@nestjs/common';
import * as path from 'path';
import * as moment from 'moment';
const pdfMake = require('pdfmake');

@Injectable({ scope: Scope.TRANSIENT })
export class DaysofmonthService {
  private excludedDayPattern = [];

  generate(data, res) {
    moment.locale('fr');

    if (data.excludedDays) {
      const patterns = data.excludedDays.split(',');
      for (const pattern of patterns) {
        if (pattern.indexOf('-') < 0) {
          this.excludedDayPattern.push({ min: +pattern, max: +pattern });
        } else {
          const [min, max] = pattern.split('-');
          this.excludedDayPattern.push({
            min: min || 1,
            max: max || 31,
          });
        }
      }
    }

    const fontDescriptors = {
      Roboto: {
        normal: path.join(
          __dirname,
          'assets',
          '/fonts/Acceseditionsscript-Normal.otf'
        ),
      },
    };

    const printer = new pdfMake(fontDescriptors);

    const columns = 5;
    const rows = 2;
    const date = moment({
      year: +data.year,
      month: data.month - 1,
      day: 1,
    });
    const countDays = date.daysInMonth();

    const pages = Math.ceil(countDays / (columns * rows));

    const tables = [];
    let d = 1;
    for (let page = 0; page < pages; page++) {
      const table = {
        table: { body: [], widths: new Array(columns).fill('*') },
        pageBreak: page < pages - 1 ? 'after' : undefined,
      };
      for (let row = 0; row < rows; row++) {
        table.table.body.push([]);
        for (let column = 0; column < columns; column++) {
          if (d <= countDays) {
            const now = date.date(d);

            const content = [
              { text: now.format('dddd').toUpperCase(), style: ['head'] },
              {
                text: d,
                margin: [0, 22],
                style: ['day', this.isDayOff(now) ? 'off' : 'on'],
              },
            ];
            table.table.body[row].push(content);
          } else {
            table.table.body[row].push('');
          }
          d++;
        }
      }
      tables.push(table);
    }

    const doc = printer.createPdfKitDocument({
      pageSize: 'A4',
      pageOrientation: 'landscape',
      content: [...tables],
      styles: {
        head: {
          fontSize: 30,
          alignment: 'center',
        },
        day: {
          fontSize: 72,
          alignment: 'center',
        },
        on: {
          color: '#00FF00',
        },
        off: {
          color: '#FF0000',
        },
      },
    });
    doc.pipe(res);
    doc.end();
  }

  protected isDayOff(date: moment.Moment) {
    const day = date.day();
    if (day === 0 || day === 6 || day === 3) {
      return true;
    }
    for (const pattern of this.excludedDayPattern) {
      const d = date.date();
      if (d >= pattern.min && d <= pattern.max) {
        return true;
      }
    }

    return false;
  }
}
