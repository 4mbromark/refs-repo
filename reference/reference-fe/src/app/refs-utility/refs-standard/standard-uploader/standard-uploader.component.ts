import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-standard-uploader',
  templateUrl: './standard-uploader.component.html',
  styleUrls: ['./standard-uploader.component.css']
})
export class StandardUploaderComponent implements OnInit {
  @Input() text: string;
  @Input() format: string;
  @Output() file = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList): void {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.file.emit(fileReader.result.toString());
    };
    fileReader.readAsText(files.item(0));
  }
}
