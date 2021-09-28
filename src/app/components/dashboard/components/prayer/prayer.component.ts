import { Component, OnInit } from '@angular/core';
import { Prayer } from './prayer';
import { PrayerService } from './prayer.service';
import moment from 'moment';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.scss']
})
export class PrayerComponent implements OnInit {
  public todayPrayers: Prayer[] = [];
  public pastTimes: number[] = [];
  public now: number = new Date().getTime();

  constructor(private prayerService: PrayerService) { }

  ngOnInit(): void {
    if (localStorage.getItem('todayPrayers')) {
      this.todayPrayers = JSON.parse(localStorage.getItem('todayPrayers') as string);
    }
    let bgClass: string;
    let prayerSun: string;
    this.prayerService.getPrayer('cairo').subscribe((data) => {
      let prayerTimes: any = data.results.datetime[0].times;
      for (const prayer in prayerTimes) {
        let timesNo = moment(prayerTimes[prayer], "HH:mm").format();
        let timesDate: number = new Date(timesNo).getTime();
        if (prayer === 'Fajr' || prayer === 'Dhuhr' || prayer === 'Asr' || prayer === 'Maghrib' || prayer === 'Isha') {
          switch (prayer) {
            case 'Fajr':
              bgClass = 'bg-fajr';
              prayerSun = 'fajr-sun';
              break;
            case 'Dhuhr':
              bgClass = 'bg-dhuhr';
              prayerSun = 'dhuhr-sun';
              break;
            case 'Asr':
              bgClass = 'bg-asr';
              prayerSun = 'asr-sun';
              break;
            case 'Maghrib':
              bgClass = 'bg-maghrib';
              prayerSun = 'maghrib-moon';
              break;
            case 'Isha':
              bgClass = 'bg-isha';
              prayerSun = 'isha-moon';
              break;
          }
          if (this.todayPrayers.length !== 5) {
            this.todayPrayers.push({
              name: prayer,
              timeNumber: timesDate,
              timeString: prayerTimes[prayer],
              status: '',
              background: bgClass,
              icon: prayerSun,
            })
          }
        }
      }
      this.prayerStatus(this.todayPrayers);
    });
  }

  onChangePrayerStatus(prayer: Prayer) {
    localStorage.removeItem('todayPrayers');
    for (let i = 0; i < this.todayPrayers.length; i++) {
      if (this.todayPrayers[i].name === prayer.name) {
        switch (prayer.status) {
          case 'done':
            this.todayPrayers[i].status = 'missed';
            break;
          case 'time':
            this.todayPrayers[i].status = 'done';
            break;
          case 'missed':
            this.todayPrayers[i].status = 'done';
            break;
        }
      }
    }
    localStorage.setItem('todayPrayers', JSON.stringify(this.todayPrayers));
  }

  prayerStatus(prayer: Prayer[]) {
    localStorage.removeItem('todayPrayers');
    for (let i = 0; i < this.todayPrayers.length; i++) {
      if (this.todayPrayers[i].timeNumber < this.now) {
        this.pastTimes.push(this.todayPrayers[i].timeNumber);
        this.pastTimes.sort((a: number, b: number) => {
          return b - a;
        })
      }
    }
    for (let i = 0; i < prayer.length; i++) {
      if (prayer[i].timeNumber < this.now && prayer[i].timeNumber !== this.pastTimes[0] && prayer[i].status !== "done") {
        prayer[i].status = "missed";
      } else if (prayer[i].timeNumber === this.pastTimes[0] && prayer[i].status !== "done") {
        prayer[i].status = "time";
      } else if (prayer[i].timeNumber > this.now) {
        prayer[i].status = "";
      }
    }
    localStorage.setItem('todayPrayers', JSON.stringify(this.todayPrayers));
  }
}
