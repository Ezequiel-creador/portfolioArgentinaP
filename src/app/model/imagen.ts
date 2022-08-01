import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";


@Pipe
({
    name: 'safeUrl'
  })
export class SafeUrlPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }
    transform(url:string) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}