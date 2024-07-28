import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustumDirective]'
})
export class CustumDirectiveDirective {
  @HostBinding('style.padding') padding :string='10px'
  @HostBinding('style.Color') color :string='red'

 
  constructor(private Eleref : ElementRef , private ren2 : Renderer2 ) { }
  @HostListener('mouseover') hover(){    
    this.ren2.setStyle(this.Eleref.nativeElement ,'color' ,'blue')
  }

  @HostListener('keyup',['$event']) getvalue(eve : Event){
   let val =eve.target as HTMLInputElement
   let inputval =val.value.toLocaleLowerCase()
   val.value =inputval.toString()
   console.log(val.value);
  } 
  //^ imp @HostListener('input',['$event']) Oncreditdigits(eve : Event){
  //   let inputcontrol =eve.target as HTMLInputElement
  //   let inputval=inputcontrol.value.replace(/\s+/g, '')
  //   if(inputval.length > 16){
  //       inputval=inputval.substring(0,16)
  //   }
  //   let nubersofarr :Array<string>=[]
  //   for(let i = 0;i <inputval.length ;i+=4){
  //     nubersofarr.push(inputval.slice(i,i+ 4))
  //   }
  
}
