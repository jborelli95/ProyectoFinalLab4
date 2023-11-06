import { Component, OnInit } from '@angular/core';
import { Countrie, User } from 'src/app/interfaces/interfaces';
import { countries } from '../../store/country-data-store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  countriesList: Countrie[] = countries;

  form: FormGroup = this.fb.group({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    country: "",
    startedDate: "",
    favoriteTeam: 0,
    id: 0
  })

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: ActivatedRoute,
    private rout: Router) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.router.params.subscribe(params => {
      const userId = +params['id'];
      if (!isNaN(userId)) {
        this.userService.getUserHttp(userId).subscribe(
          {
            next: (user) => {
              if (user) {
                this.form = this.fb.group({
                  username: [user.username],
                  password: [user.password],
                  firstName: [user.firstName],
                  lastName: [user.lastName],
                  email: [user.email],
                  city: [user.city],
                  state: [user.state],
                  country: [user.country],
                  startedDate: [user.startedDate],
                  favoriteTeam: [user.favoriteTeam],
                  id: [user.id]
                })
              }
            },
            error: (err) => {
              console.log(err);
            }
          }
        )
      }
    })
  }

  editUser() {
    if (this.form.invalid) {
      return
    }

    const user: User = {
      username: this.form.controls["username"].value,
      password: this.form.controls["password"].value,
      firstName: this.form.controls["firstName"].value,
      lastName: this.form.controls["lastName"].value,
      email: this.form.controls["email"].value,
      city: this.form.controls["city"].value,
      state: this.form.controls["state"].value,
      country: this.form.controls["country"].value,
      startedDate: this.form.controls["startedDate"].value,
      favoriteTeam: this.form.controls["favoriteTeam"].value,
      id: this.form.controls["id"].value
    }

    this.userService.putUserHttp(user).subscribe(
      {
        next: () => {
          this.rout.navigate(["/home"])
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

}