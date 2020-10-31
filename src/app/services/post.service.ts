import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PostService {
  private URL = "https://jsonplaceholder.typicode.com/posts";
  private ALL_BREEDS = "https://dog.ceo/api/breeds/list/all";

  constructor(private http: HttpClient) {}

  getAllBreeds() {
    return this.http.get(this.ALL_BREEDS);
  }
  getSelectedBreedDetails(breed) {
    console.log(breed);
    return this.http.get("https://dog.ceo/api/breed/" + breed + "/images");
  }
}
