import { AbstractControl } from "@angular/forms"

export default function CompareValidator(control1: string, control2: string){
    return function(form : AbstractControl){
        const control1Value=form.get(control1)?.value;
        const control2Value=form.get(control2)?.value;
        
        if(control1Value=== control2Value){
            return null;
        }
        return{ compare:{1: control1Value, 2: control2Value}}
    }
}