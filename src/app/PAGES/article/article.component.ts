import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Article } from 'src/app/Models/article';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles?: Article[];



  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAllArticle().pipe(first()).subscribe(articles => {
      this.articles = articles as unknown as Article[];

    })
  }


}
