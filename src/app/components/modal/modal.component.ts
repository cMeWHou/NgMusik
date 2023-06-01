import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public spanLabelNames = ['Name', 'Email', 'Message']

  @Output()
  public closeModal = new EventEmitter<void>;

  public onCloseModal = () => {
    this.closeModal.emit();
  }
}
