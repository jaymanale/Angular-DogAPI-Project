import { Component, OnInit } from "@angular/core";
import { CodegenComponentFactoryResolver } from "@angular/core/src/linker/component_factory_resolver";

import { PostService } from "./services/post.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  posts: any = [];
  allBreeds: any = [];
  breedList: any = [];
  index = 0;
  isLoading = false;
  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAllBreeds().subscribe(
      (res: any) => {
        let breedArray = [];
        for (let breed in res.message) {
          breedArray.push(breed);
        }
        this.allBreeds = breedArray;
        console.log(this.allBreeds);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getBreedDetails(breed) {
    this.isLoading = true;
    this.service.getSelectedBreedDetails(breed).subscribe((res: any) => {
      this.breedList = res.message;
      this.isLoading = false;
    });
  }

  getPrevDog() {
    this.index = this.index - 1;
  }

  getNextDog() {
    this.index = this.index + 1;
  }
}
