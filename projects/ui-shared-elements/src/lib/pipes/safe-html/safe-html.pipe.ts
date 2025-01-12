import { inject, Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: "safeHtml",
    standalone: true,
})
export class SafeHtml implements PipeTransform {
    readonly #sanitizer: DomSanitizer = inject(DomSanitizer);

    transform(html: string = ""): unknown {
        return this.#sanitizer.bypassSecurityTrustHtml(html);
    }
}
