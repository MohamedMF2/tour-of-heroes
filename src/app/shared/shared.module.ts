import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatButtonModule, MatListModule],
})
export class SharedModule {}
