import {Component} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  public schedule_rows = [
    [
      {
        time: '11:00 AM to 12:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
        speakers: [
          {
            image: 'assets/images/yui_avatar.png',
            name: 'Yui Ronald',
            booth: '2F12'
          },
        ],
        buttonContent: {
          text: 'Preview',
          source: 'assets/images/view_button_preview.svg'
        }
      },
      {
        time: '12:00 PM to 03:00 PM',
        content: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel\n' +
          '                            vulputate vitae, fringilla id magna. Vestibulum ornare\n' +
          '                            eget urna nec pulvinar. Praesent porttitor convallis blandit.\n' +
          '                            Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum\n' +
          '                            non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.',
        speakers: [
          {
            image: 'assets/images/bob_avatar.png',
            name: 'Bob John',
            booth: '3G12'
          },
          {
            image: 'assets/images/yui_avatar.png',
            name: 'Yui Ronald',
            booth: '2F12'
          },
          {
            image: 'assets/images/emma_avatar.png',
            name: 'Emma Satoshi',
            booth: '2A35'
          }
        ],
        buttonContent: {
          text: 'Live',
          source: 'assets/images/view_button_live.svg'
        }
      },
      {
        time: '03:00 PM to 04:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
        speakers: [
          {
            image: 'assets/images/sasha_avatar.png',
            name: 'Sasha Jackson',
            booth: '2F18'
          },
          {
            image: 'assets/images/diana_avatar.png',
            name: 'Diana Brock',
            booth: '2F24'
          },
        ],
        buttonContent: {
          text: 'Upcoming',
          source: 'assets/images/view_button_upcoming.svg'
        }
      }
    ],
    [
      {
        time: '11:00 AM to 12:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
        speakers: [
          {
            image: 'assets/images/yui_avatar.png',
            name: 'Yui Ronald',
            booth: '2F12'
          },
        ],
        buttonContent: {
          text: 'Preview',
          source: 'assets/images/view_button_preview.svg'
        }
      },
      {
        time: '03:00 PM to 04:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
        speakers: [
          {
            image: 'assets/images/sasha_avatar.png',
            name: 'Sasha Jackson',
            booth: '2F18'
          },
          {
            image: 'assets/images/diana_avatar.png',
            name: 'Diana Brock',
            booth: '2F24'
          },
        ],
        buttonContent: {
          text: 'Upcoming',
          source: 'assets/images/view_button_upcoming.svg'
        }
      }
    ],
    [
      {
        time: '03:00 PM to 04:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
        speakers: [
          {
            image: 'assets/images/sasha_avatar.png',
            name: 'Sasha Jackson',
            booth: '2F18'
          },
          {
            image: 'assets/images/diana_avatar.png',
            name: 'Diana Brock',
            booth: '2F24'
          },
        ],
        buttonContent: {
          text: 'Upcoming',
          source: 'assets/images/view_button_upcoming.svg'
        }
      }
    ]
  ]

  public schedule_tabTitles = document.getElementsByClassName('schedule-day-tab')
  public schedule_tabIndex: number = 0
  public activeTab = 'tab-active'

  public SetScheduleTabTitle = (tab : number) => {
    this.schedule_tabIndex = tab
  }
}
