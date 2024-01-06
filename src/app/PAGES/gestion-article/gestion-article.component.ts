import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Article } from 'src/app/Models/article';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-gestion-article',
  templateUrl: './gestion-article.component.html',
  styleUrls: ['./gestion-article.component.css']
})
export class GestionArticleComponent implements OnInit {

  article = new Article();

  articleForm = new FormGroup({

    title: new FormControl(null, [

    ]),
    image: new FormControl(null, [

    ]),
    article: new FormControl(null, [

    ]),

  })
  imageService: any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.articleForm.valid) {

    }


  }

}
