import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { CandidateComponent } from "./candidate.component";
import { CandidateRoutingModule } from "./candidate.route.module";
@NgModule({
  declarations: [AddComponent, EditComponent, CandidateComponent],
  imports: [CommonModule, CandidateRoutingModule],
  exports: [CandidateRoutingModule],
  providers: []
})
export class CandidateModule {}
