export function getCurrentDate(): any {
    //  👉️ 7/31/2023
    const now = new Date();
    return now.toLocaleDateString();
  }
  
  export function getLocaleDateTime(): any {
    // 👉️ 7/31/2023, 11:40:47 AM
    const now = new Date();
    return now.toLocaleString();
  }
  
  export function getUTCDateTime(): any {
    // Mon, 31 Jul 2023 08:40:47 GMT
    const now = new Date();
    return now.toUTCString();
  }
  
  export function getISODateTime(): any {
    // 👉️ 2023-07-31T08:40:47.891Z
    const now = new Date();
    return now.toISOString();
  }

  export function convertToUTCDateTime(date: string): any {
    // Mon, 31 Jul 2023 08:40:47 GMT
    const now = new Date(date);
    return now.toUTCString();
  }
  
  export function dateSingleDigitWithLeadingZeros(dateNum:number) {
    if(dateNum < 10)
     return String(dateNum).padStart(2, '0');
    return dateNum
  }

  /* References: 
  * https://stackoverflow.com/questions/11526504/minimum-and-maximum-date
  */

  export class DateFunction {

    static monthworkingdays(month: number, startday: number, endday: number, enddaymonth: number, year: number): number {
        let ctrmonthdays: number = 0;
        let ctrworkingdays: number = 0;
        let currentDate: Date = new Date(year, month, 1);
        let endDate: Date = new Date(year, month, enddaymonth);
        while (currentDate <= endDate) {
            const weekDay = currentDate.getDay();
            if (weekDay != 0 && weekDay != 6) {
                ctrmonthdays += 1;
            }
            if (currentDate.getDate() >= startday && currentDate.getDate() <= endday) {
                if (weekDay != 0 && weekDay != 6) {
                    ctrworkingdays += 1;
                }

            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return ctrworkingdays;
    }

    static IsLeapYear(lyear: any) {
        return (lyear % 100 === 0) ? (lyear % 400 === 0) : (lyear % 4 === 0);
    }

    static monthnames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    static monthlongnames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    static monthenddates(year: number) {
        let monthendday: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if (this.IsLeapYear(year)) {
            monthendday[1] = 29;
        }
        return monthendday;
    }

    static computeDays(startdatetime:string, enddatetime:string) {
        return (new Date(enddatetime).getTime() - (new Date(startdatetime)).getTime()) / (60.0 * 60.0 * 1000.0 * 24);
    }
    
    static time24HourChecker(hour: number): number{
        return hour === 0 ? 24 : hour
      }

      static isAM(datetime: Date): boolean {
        const hour = datetime.getHours();
        return hour >= 0 && hour < 12;
      }
      
      static isPM(datetime: Date): boolean {
        const hour = datetime.getHours();
        return hour >= 12 && hour < 24;
      }

      static  convertToARMYHours(time: string): number{
        let hour = parseInt(time.substring(0, 2));
          if(time.includes("PM")){
            return hour + 12
          }else if(time.includes("AM")){
            if(hour == 12)
               return 0
            return hour
          }

          return NaN;
       }
}

/*  GET THE HOURS BETWEEN TWO DATES

   scheduleStartTimeHour = 06 // 6AM
   scheduleEndTimeHour = 24 // 12AM
   
  const scheduleStartDate = new Date();
  Const scheduleEndDate = this.setScheduleEndDate(scheduleStartTimeHour,scheduleEndTimeHour);

  const workHours =  DateFunction.diff_hours(scheduleStartDate,scheduleEndDate); // result


 setScheduleEndDate(scheduleStartTimeHour: any, scheduleEndTimeHour: any): Date {
    var date = new Date();

     let endTimeHour = DateFunction.time24HourChecker(+scheduleEndTimeHour);
     let startTimeHour = +scheduleStartTimeHour;

      if(endTimeHour == 24 || startTimeHour == endTimeHour){
        date.setDate(date.getDate() + 1);
        return date;
      }
     else if(DateFunction.isAM(startTimeHour) && DateFunction.isPM(endTimeHour)){
       return date;
     }
     else if(DateFunction.isPM(startTimeHour) && DateFunction.isAM(endTimeHour)){
      date.setDate(date.getDate() + 1);
      return date;
    }
    else if(DateFunction.isAM(startTimeHour) && DateFunction.isAM(endTimeHour)){
      if(startTimeHour > endTimeHour){
        date.setDate(date.getDate() + 1);
        return date;
      }else if(startTimeHour < endTimeHour){
        return date;
      }
    
    }
    else if(DateFunction.isPM(startTimeHour) && DateFunction.isPM(endTimeHour)){
      if(startTimeHour < endTimeHour){
        return date;
      }else if(startTimeHour > endTimeHour){
        date.setDate(date.getDate() + 1);
        return date;
      }
    }
     
     return date;
  }
*/