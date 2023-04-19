import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-verification",
  templateUrl: "./verification.component.html",
  styleUrls: ["./verification.component.css"],
})
export class VerificationComponent {
  error = false;
  errormes: string;
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    family: new FormControl(null, Validators.required),
    number: new FormControl(null, Validators.required),
  });
  handleChange(info: any): void {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
    } else if (info.file.status === "error") {
    }
  }

  Onsubmit() {
    if (!this.form.valid) {
      let errormessage = "error required input";
      this.error = true;
      this.errormes = errormessage;
      setTimeout(() => {
        this.Clearer();
        this.error = false;
      }, 5000);
    }
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  Clearer() {
    this.form.reset();
  }
}
