"use strict";(self.webpackChunkbisema_basic=self.webpackChunkbisema_basic||[]).push([[515],{2515:($,m,a)=>{a.r(m),a.d(m,{CartModule:()=>g});var u=a(6895),_=a(6491),l=a(433),x=a(9579),T=a(5133),P=a(2340),C=a(2687),t=a(1571),Z=a(6814),y=a(4850);class d extends y.b{constructor(e){super(e)}updateCartItem(e,i){return this._networkService.put(`api/cart/update/${i}`,e)}deleteCartItems(e){return this._networkService.post("api/cart/delete",e)}}d.\u0275fac=function(e){return new(e||d)(t.LFG(t.zs3))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac});var v=a(6916),b=a(7185),A=a(7103),I=a(2216),N=a(3666);function D(o,e){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const i=e.$implicit;t.xp6(1),t.Oqu(i)}}function O(o,e){if(1&o&&(t.TgZ(0,"p",28),t._uU(1),t.YNc(2,D,2,1,"span",29),t.qZA()),2&o){const i=t.oxw().$implicit;t.xp6(1),t.hij(" ",i.productID," "),t.xp6(1),t.Q6J("ngForOf",i.finishCode)}}function U(o,e){if(1&o&&(t.TgZ(0,"p",28),t._uU(1),t.qZA()),2&o){const i=t.oxw().$implicit;t.xp6(1),t.hij(" ",i.fullSpecificationCode," ")}}function S(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1," / price:0"),t.qZA())}function q(o,e){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const i=t.oxw().index,n=t.oxw(2).$implicit;t.xp6(1),t.AsE(" -> ",n.finishName[i]," | ",n.finishPrice[i],"")}}const F=function(o,e){return{"bg-purple text-white":o,"clr-grey":e}};function J(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"div",24)(1,"a",36),t.NdJ("click",function(){const s=t.CHM(i).$implicit,c=t.oxw().index,h=t.oxw(2).index,K=t.oxw();return t.KtG(K.changeOrderCode(h,c,s.name,s.PRICES.PRICE.Text,s.DESCRIPTIONS.TEXT.Text))}),t._uU(2),t.qZA()()}if(2&o){const i=e.$implicit,n=t.oxw().index,r=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngClass",t.WLB(2,F,i.name==r.finishCode[n],i.name!=r.finishCode[n])),t.xp6(1),t.hij(" ",i.DESCRIPTIONS.TEXT.Text," ")}}const w=function(o,e){return{"clr-red":o,"text-success":e}};function E(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"div",31)(1,"a",32),t.NdJ("click",function(){const s=t.CHM(i).index,c=t.oxw(2).index,h=t.oxw();return t.KtG(h.finishCollapseToggle(c,s))}),t._UZ(2,"fa-icon",20),t._uU(3),t.YNc(4,S,2,0,"span",9),t.YNc(5,q,2,2,"span",9),t.qZA(),t.TgZ(6,"div",33,34),t.YNc(8,J,3,5,"div",35),t.qZA()()}if(2&o){const i=e.$implicit,n=e.index,r=t.oxw(2).$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(7,w,"??"==r.finishCode[n].trim(),"??"!=r.finishCode[n].trim())),t.xp6(1),t.Q6J("icon",s.faCaretDown),t.xp6(1),t.hij(" ",i.grp.DESCRIPTIONS.TEXT.Text," "),t.xp6(1),t.Q6J("ngIf",null==r.finishPrice[n]),t.xp6(1),t.Q6J("ngIf",null!=r.finishPrice[n]),t.xp6(1),t.Q6J("ngbCollapse",i.collapse),t.xp6(2),t.Q6J("ngForOf",r.finishOptions[n])}}function k(o,e){if(1&o&&(t.ynx(0,24),t.YNc(1,E,9,10,"div",30),t.BQk()),2&o){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",i.productGroup)}}const G=function(o){return{"bg-red":o}};function M(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"tr",11)(1,"td")(2,"b"),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"input",12),t.NdJ("change",function(){const s=t.CHM(i).index,c=t.oxw();return t.KtG(c.changeTagName(s))}),t.qZA()(),t.TgZ(6,"td")(7,"input",13,14),t.NdJ("click",function(){const s=t.CHM(i).$implicit,c=t.oxw();return t.KtG(c.checkBox(s))}),t.qZA()(),t.TgZ(9,"td",15),t._UZ(10,"img",16),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"uppercase"),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.ALo(16,"uppercase"),t.qZA(),t.TgZ(17,"td")(18,"div",17),t.YNc(19,O,3,2,"p",18),t.YNc(20,U,2,1,"p",18),t.TgZ(21,"a",19),t.NdJ("click",function(r){const c=t.CHM(i).index,h=t.oxw();return t.KtG(h.editFinish(c,r))}),t._UZ(22,"fa-icon",20),t.qZA()(),t.YNc(23,k,2,1,"ng-container",21),t.qZA(),t.TgZ(24,"td",22)(25,"div",23)(26,"div")(27,"p",24),t._uU(28),t.qZA()()()(),t.TgZ(29,"td",4)(30,"div",25)(31,"button",26),t.NdJ("click",function(){const s=t.CHM(i).index,c=t.oxw();return t.KtG(c.stepDown(s))}),t._uU(32,"-"),t.qZA(),t.TgZ(33,"input",27),t.NdJ("change",function(){const s=t.CHM(i).index,c=t.oxw();return t.KtG(c.changePrice(s))}),t.qZA(),t.TgZ(34,"button",26),t.NdJ("click",function(){const s=t.CHM(i).index,c=t.oxw();return t.KtG(c.stepUp(s))}),t._uU(35,"+"),t.qZA()()(),t.TgZ(36,"td"),t._uU(37),t.ALo(38,"currency"),t.qZA(),t.TgZ(39,"td"),t._uU(40),t.ALo(41,"currency"),t.qZA()()}if(2&o){const i=e.$implicit,n=e.index,r=t.oxw();t.Q6J("ngClass",t.VKq(25,G,""==i.backgroundColor)),t.xp6(3),t.hij("",n+1,")"),t.xp6(2),t.Q6J("formControl",r.tagNameArray.controls[n]),t.xp6(5),t.FAE("src","",r.baseUrl,"assets/",i.companyCode,"/",i.catalogName,"/prod_icons/",i.productImage,"",t.LSH),t.xp6(2),t.Oqu(t.lcZ(13,17,i.companyCode)),t.xp6(3),t.Oqu(t.lcZ(16,19,i.catalogName)),t.xp6(4),t.Q6J("ngIf",!i.isSpecialProduct),t.xp6(1),t.Q6J("ngIf",i.isSpecialProduct),t.xp6(2),t.Q6J("icon",r.faPencil),t.xp6(1),t.Q6J("ngIf",i.edit),t.xp6(5),t.Oqu(i.displayName),t.xp6(5),t.Q6J("formControl",r.qtyArray.controls[n]),t.xp6(4),t.Oqu(t.lcZ(38,21,i.unitPrice)),t.xp6(3),t.Oqu(t.lcZ(41,23,i.quantity*i.unitPrice))}}function Q(o,e){if(1&o&&(t.TgZ(0,"tr"),t._UZ(1,"td",37),t.TgZ(2,"td",38),t._uU(3,"Grand Total"),t.qZA(),t.TgZ(4,"td",38),t._uU(5),t.ALo(6,"currency"),t.qZA()()),2&o){const i=t.oxw();t.xp6(5),t.hij(" ",t.lcZ(6,1,i.grandTotal)," ")}}function R(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"div",39)(1,"button",40),t.NdJ("click",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.removeItem())}),t._UZ(2,"fa-icon",20),t._uU(3," Delete "),t.qZA(),t.TgZ(4,"button",41),t.NdJ("click",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.finishEdit())}),t._UZ(5,"fa-icon",20),t._uU(6," Finish Editing "),t.qZA(),t.TgZ(7,"a",42),t.NdJ("click",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.goToCheckout())}),t._uU(8," Checkout "),t.qZA()()}if(2&o){const i=t.oxw();t.xp6(1),t.Q6J("disabled",i.deleteItem),t.xp6(1),t.Q6J("icon",i.faTrash),t.xp6(2),t.Q6J("disabled",i.finishEditing),t.xp6(1),t.Q6J("icon",i.faPencil)}}const j=function(o){return{"tbody-custom":o}};class f{constructor(e,i,n,r,s,c){this.store=e,this.cartService=i,this.fb=n,this.busService=r,this.toastr=s,this.router=c,this.baseUrl=P.N.baseUrl,this.faCaretDown=C.eW2,this.faTrash=C.$aW,this.faPencil=C.TzT,this.company=null,this.catalogue=null,this.singleProductData={id:null,item:null,group:[],price:null,description:"No Description",finishImages:[],finishOptions:[],finishCode:[],finishPrice:[],finishName:[],qty:1},this.cart=[],this.tagNameArray=this.fb.array([]),this.qtyArray=this.fb.array([]),this.editCtrl=this.fb.array([]),this.finishEditing=!0,this.selectedIndex=[],this.editIndex=0,this.deleteItem=!0,this.grandTotal=null}getCart(){this.cartService.getCart().subscribe({next:e=>{this.cart=e,this.loadCartDetails()}})}loadCartDetails(){let e=0;this.cart.length>0&&this.cart.forEach(i=>{i.finishOptions=i.finishOptions,i.productGroup=i.productGroup,i.finishCode=i.finishCode,i.finishName=i.finishName,i.finishPrice=i.finishPrice,i.edit=!1,e+=+i.quantity*i.unitPrice,this.tagNameArray.push(new l.NI(i.tagName)),this.qtyArray.push(new l.NI({value:i.quantity,disabled:!0})),this.editCtrl.push(new l.NI(!1))}),this.grandTotal=parseFloat(e.toString()).toFixed(2),this.busService.sendShowCart()}changeTagName(e){this.cart[e].tagName=this.tagNameArray.controls[e].value,this.updateAndReloadCartDetails(e)}checkBox(e){if(null==this.selectedIndex.find(n=>n==e))this.selectedIndex.push(e),this.deleteItem=!1;else{let n=this.selectedIndex.findIndex(r=>r==e);this.selectedIndex.splice(n,1),0==this.selectedIndex.length&&(this.deleteItem=!0)}}editFinish(e,i){if(this.editIndex=e,this.cart[e].isSpecialProduct)return alert("This is a special order product. You cannot edit the finish of such product. Please remove this item from cart and add again to proceed with updating the finish."),void i.preventDefault();let r=this.cart.findIndex(s=>1==s.edit);-1!=r&&(this.cart[r].edit=!1),this.cart[e].edit=!0,this.finishEditing=!1}finishEdit(){let e=0;this.editCtrl.controls.forEach(i=>{i.setValue(!1),this.cart[e]&&(this.cart[e].edit=!1,e++)}),this.updateAndReloadCartDetails(this.editIndex)}removeItem(){this.selectedIndex.forEach(e=>{let i=this.cart.findIndex(n=>n==e);this.cart.splice(i,1)}),this.updateAndReloadCartDetails(0)}finishCollapseToggle(e,i){this.cart[e].productGroup.forEach((n,r)=>{n.collapse=r!=i||!n.collapse})}changeOrderCode(e,i,n,r,s){null==this.cart[e].finishImages&&(this.cart[e].finishImages=[]),this.cart[e].finishImages[i]=i,this.cart[e].finishCode[i]=n,this.cart[e].fullSpecificationCode=this.cart[e].productID+n,this.cart[e].finishName[i]=s,null!=r&&null==this.cart[e].finishPrice[i]&&(this.cart[e].finishPrice[i]=parseFloat(r),this.cart[e].unitPrice=+this.cart[e].unitPrice+ +this.cart[e].finishPrice[i],this.cart[e].unitPrice=parseFloat(this.cart[e].unitPrice).toFixed(2)),null==this.cart[e].finishCode.find(h=>" ??"==h)&&(this.cart[e].backgroundColor="true"),this.editFinish(e,null)}stepDown(e){1!=this.qtyArray.controls[e].value&&(this.qtyArray.controls[e].setValue(this.qtyArray.controls[e].value-1),this.changePrice(e))}stepUp(e){this.qtyArray.controls[e].setValue(this.qtyArray.controls[e].value+1),this.changePrice(e)}changePrice(e){this.cart[e].quantity=this.qtyArray.controls[e].value,this.updateAndReloadCartDetails(e)}onDrop(e){this.setProduct(e.element.parent.parent.data.id,e.element.parent.data.id,e.element.data.id)}setProduct(e,i,n){this.singleProductData.group=[],this.singleProductData.finishImages=[],this.singleProductData.finishCode=[],this.singleProductData.finishPrice=[],this.singleProductData.finishName=[],this.singleProductData.finishOptions=[],this.singleProductData.id=n,this.singleProductData.item=this.catalogue.ITEMS.ITEM.find(r=>r.id==this.singleProductData.id),this.singleProductData.item.ITEM_GROUPS.ITEM_GROUP instanceof Array?this.singleProductData.item.ITEM_GROUPS.ITEM_GROUP.forEach((r,s)=>{this.productGroup(r.id,s)}):this.productGroup(this.singleProductData.item.ITEM_GROUPS.ITEM_GROUP.id,0),this.singleProductData.price=parseFloat(this.singleProductData.item.PRICES.PRICE.Text),this.company&&this.getProductSectionTextFile(e,i),this.addToCart()}productGroup(e,i){let n=this.catalogue.GROUPS.GROUP.find(r=>r.id==e);this.singleProductData.group.push({grp:n,collapse:!0}),this.singleProductData.finishCode.push(" ??"),n.OPTIONS.OPTION instanceof Array?this.singleProductData.finishOptions[i]=n.OPTIONS.OPTION:(this.singleProductData.finishOptions[i]=[],this.singleProductData.finishOptions[i].push(n.OPTIONS.OPTION))}getProductSectionTextFile(e,i){console.log(this.company),this.cartService.getSectionTextFile(e,i,this.catalogue.catalogueCode,this.company?.company?.name).subscribe({next:n=>{this.singleProductData.description=n}})}addToCart(){let i,e=this.singleProductData.finishCode.toString();e=e.replace(/,/g,""),i=e.includes("?")?"":"#cbebc6";const n={productID:this.singleProductData.id,productImage:this.singleProductData.id.toLowerCase()+"_3d.png",description:this.singleProductData.description,backgroundColor:i,companyCode:this.company?.company.name,displayName:this.singleProductData.item.LONG_DESC.TEXT.Text,baseUnitofMeasure:"PCS",unitPrice:parseFloat(this.singleProductData.price.toFixed(2)),quantity:1,genProdPostingGroup:"RETAIL",inventoryPostingGroup:"RESALE",manufacturingCompany:this.catalogue.desc,manufacturingCompanyThreeLettersCode:this.catalogue.code,catalogName:this.catalogue.catalogueCode,catalogThreeLettersCode:this.catalogue.catalogueCode,catalogReleaseDate:`${this.catalogue.year}-${this.catalogue.month}-${this.catalogue.day}`,fullSpecificationCode:this.singleProductData.id+e,tagName:"",finishOptions:this.singleProductData.finishOptions,productGroup:this.singleProductData.group,finishCode:this.singleProductData.finishCode,finishName:this.singleProductData.finishName,finishPrice:this.singleProductData.finishPrice,edit:!1};this.cartService.addToCart(n).subscribe({next:r=>{this.busService.sendShowCart(),this.getCart()}})}updateAndReloadCartDetails(e){this.cartService._storageService.setItem("cart",JSON.stringify(this.cart)),this.loadCartDetails(),this.toastr.success("Cart updated successfully")}getCompany(){this.store.select(T.p).subscribe({next:e=>{this.company=e}})}getCatalogue(){this.store.select(x.P).subscribe({next:e=>{this.catalogue=e}})}goToCheckout(){if(this.cart.filter(r=>r.finishCode.find(s=>" ??"==s)).length>0)return void this.toastr.error("Please select all finishes before proceeding to checkout");let i=window.location.href.replace(this.router.url,"");const n=new URL("/#/checkout",i).href;window.open(n,"_blank")}ngOnInit(){this.getCompany(),this.getCatalogue(),this.getCart()}}f.\u0275fac=function(e){return new(e||f)(t.Y36(Z.yh),t.Y36(d),t.Y36(l.qu),t.Y36(v.Z),t.Y36(b._W),t.Y36(_.F0))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-cart"]],decls:32,vars:6,consts:[[1,"mt-2","pt-2","text-center"],[1,"border-dark"],[1,"table","table-bordered",3,"treeDrop"],[1,"thead-light"],[1,"text-center"],["scope","col"],["scope","col",1,"bordNone"],[3,"ngClass"],["class","text-center data",3,"ngClass",4,"ngFor","ngForOf"],[4,"ngIf"],["class","col-12 text-end",4,"ngIf"],[1,"text-center","data",3,"ngClass"],["type","text","placeholder","Type tagname ...",1,"tag-name",3,"formControl","change"],["type","checkbox",3,"click"],["cartCheckboxes",""],[1,"img-hover-zoom"],["width","100","alt","Buy",3,"src"],[1,"d-flex","justify-content-between"],["class","code text-start",4,"ngIf"],["href","javascript:;",3,"click"],[3,"icon"],["class","text-start",4,"ngIf"],[1,"bordNone"],[1,"cart-info"],[1,"text-start"],[1,"input-group","bg-main","mb-3","qtyInput2"],["type","button",1,"btn","bg-light-purple","border",3,"click"],["min","1","value","1",1,"form-control","form-control-sm",3,"formControl","change"],[1,"code","text-start"],[4,"ngFor","ngForOf"],["class","menu mb-2 text-start",4,"ngFor","ngForOf"],[1,"menu","mb-2","text-start"],["href","javascript:;",1,"text-decoration-none","text-start","fw-bold",3,"ngClass","click"],[3,"ngbCollapse"],["finishCollapse","ngbCollapse"],["class","text-start",4,"ngFor","ngForOf"],["href","javascript:;",1,"side-child-item","p-1","text-decoration-none","text-start",3,"ngClass","click"],["colspan","9"],[1,"fw-bold","text-center"],[1,"col-12","text-end"],[1,"float-right","btn","btn3","me-2",3,"disabled","click"],[1,"float-right","btn","btn2","mx-1",3,"disabled","click"],["href","javascript:;",1,"float-right","btn","btn2","me-1",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"h4",0),t._uU(1," List of products in cart\n"),t.qZA(),t._UZ(2,"hr",1),t.TgZ(3,"table",2),t.NdJ("treeDrop",function(r){return i.onDrop(r)}),t.TgZ(4,"thead",3)(5,"tr",4)(6,"th"),t._uU(7,"Item Number"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Tagname"),t.qZA(),t.TgZ(10,"th",5),t._uU(11,"Select"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Product Image"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Mfg"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Cat"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Order Code"),t.qZA(),t.TgZ(20,"th",6),t._uU(21,"Product Descriptions"),t.qZA(),t.TgZ(22,"th",5),t._uU(23,"Quantity"),t.qZA(),t.TgZ(24,"th",5),t._uU(25,"Unit Price"),t.qZA(),t.TgZ(26,"th",5),t._uU(27,"Total Price"),t.qZA()()(),t.TgZ(28,"tbody",7),t.YNc(29,M,42,27,"tr",8),t.YNc(30,Q,7,3,"tr",9),t.qZA()(),t.YNc(31,R,9,4,"div",10)),2&e&&(t.xp6(28),t.Q6J("ngClass",t.VKq(4,j,0==i.cart.length)),t.xp6(1),t.Q6J("ngForOf",i.cart),t.xp6(1),t.Q6J("ngIf",i.cart.length>0),t.xp6(1),t.Q6J("ngIf",i.cart.length>0))},dependencies:[u.mk,u.sg,u.O5,l.Fj,l.JJ,l.oH,A._D,I.BN,N.Vh,u.gd,u.H9],styles:[".qtyInput2[_ngcontent-%COMP%]{width:100px}.tbody-custom[_ngcontent-%COMP%]{height:400px!important}"]});const Y=[{path:"",component:f}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[_.Bz.forChild(Y),_.Bz]});var L=a(710);class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({providers:[d],imports:[u.ez,L.m,p]})}}]);