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

       static generateDateSequence(startDateStr: string, endDateStr: string): string[] {
        const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const startDate = new Date(startDateStr);
        const endDate = new Date(endDateStr);
    
        const dateList: string[] = [];
    
        for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${months[date.getMonth()]}-${date.getFullYear().toString().substr(2, 2)}`;
            dateList.push(formattedDate);
        }
    
        return dateList;
    }

    static isWeekend(dateStr: string): boolean {
      const date = new Date(dateStr);
      const dayOfWeek = date.getDay();
      return dayOfWeek === 0 || dayOfWeek === 6;
    }


    static convertToStandardDate(date: string): string {
      // Convert '21-Sep-23' to '2023-09-21'
      const parts = date.split('-');
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const monthNumber = (monthNames.indexOf(parts[1]) + 1).toString().padStart(2, '0');
      return `20${parts[2]}-${monthNumber}-${parts[0]}`;
    }
    
    static convertToCustomDate(date: string): string {
      // Convert '2023-09-21' to '21-Sep-23'
      const parts = date.split('-');
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const monthName = monthNames[parseInt(parts[1], 10) - 1];
      return `${parts[2]}-${monthName}-${parts[0].slice(2)}`;
    }

    static cutOffStartDate(date: Date){
      const day = date.getDate();

      if(day == 1)
       return date;
       
       if(day >= 2  && day <= 15){
        date.setDate(1)
       }

       if(day >= 16){
        date.setDate(15)
       }

       return date;
    }


    static cutOffEndDate(date: Date){
      const day = date.getDate();
     
      if(day <= 15){
        date.setDate(15)
      }

      if(day >= 16){
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        date.setDate(lastDayOfMonth)
      }
       return date;
    }

    static formatDateToDDMMYYYY(date: Date): string {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so +1 is needed
      const year = date.getFullYear();
    
      return `${day}/${month}/${year}`;
    }

    static hoursBetweenDates(date1: Date, date2: Date): number {
      const msPerHour: number = 1000 * 60 * 60;
      const differenceInMs: number = date2.getTime() - date1.getTime();
  
      return differenceInMs / msPerHour;
     }

   static getMonthName(date: Date): string {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return monthNames[date.getMonth()];
    }

    static  getDayName(date: Date): string {
      const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return dayNames[date.getDay()];
  }

  static formattedDate(date:Date){
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    return formattedDate;
  }

    // param: "2023-10-25T10:13:00"; // Expected result: 10:13am
    static extractTimeWithAmPm(input: string): string {
      // Parse the input string into a Date object
      const date = new Date(input);
  
      // Extract hours and minutes
      let hours: number | string = date.getUTCHours();
      const minutes: number | string = date.getUTCMinutes();
  
      // Determine AM or PM
      const period = hours >= 12 ? 'pm' : 'am';
  
      // Convert to 12-hour format
      if (hours > 12) {
          hours -= 12;
      } else if (hours === 0) {
          hours = 12;
      }
  
      // Ensure double-digit format
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
  
      return `${formattedHours}:${formattedMinutes}${period}`;
  }
    
  
    static extractTime(dateTimeString: string): string | null {
    // dateTimeString = "10/24/2023 14:05:00"; // Outputs: 14:05
      const match = dateTimeString.match(/\d{2}:\d{2}/);
      return match ? match[0] : null;
  }

  static parseCustomDate(dateStr: string): Date {
    // Assuming the dateStr is in the format 'yyyy-MM-dd HH:mm:ss'
    const [datePart, timePart] = dateStr.split(' ');

    const [year, month, day] = datePart.split('-').map(num => parseInt(num, 10));
    const [hour, minute, second] = timePart.split(':').map(num => parseInt(num, 10));

    // Note: JavaScript's Date month argument starts from 0 (0 = January, 1 = February, ...)
    return new Date(year, month - 1, day, hour, minute, second);
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