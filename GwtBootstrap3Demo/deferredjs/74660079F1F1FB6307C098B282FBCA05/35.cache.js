function wfc(){}
function lfc(a,b,c){Egb.call(this,a,b,c,(KVb(),JVb))}
function Ffc(a){var b;if(!a.i){b=new ufc(new wfc);a.i=b}return a.i}
function Efc(a){var b;if(!a.g){b=new lfc(Nfb(ihb(a.b)),Ffc(a),Dfc(a));dgb((jhb(a.b),b),uhb(jhb(a.b)));a.g=b}return a.g}
function ufc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;Ygb(this,(a=new sBb,Bub(a,(b=new cxb(Utc),Bub(b,(c=new nAb,c.b='Project Setup',mAb(c),c.c='basic setup and using custom themes',mAb(c),c)),Bub(b,(d=new vAb,Bub(d,(g=new HAb,GAb(g,(i=new Zxb(3),TBb(i.d,Vtc),i)),g)),Bub(d,(j=new yAb,Bub(j,(k=new Myb,Lyb(k,(n=new hnb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new vW(n.b.b)).b),k)),Bub(j,(o=new ykc,jBb(o,(p=new hnb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new vW(p.b.b)).b),SY(o.ab,Ytc,true),o)),j)),d)),Bub(b,(e=new vAb,Bub(e,(q=new HAb,GAb(q,(r=new Zxb(3),TBb(r.d,'Bootstrap2 Look-a-like Setup'),r)),q)),Bub(e,(s=new yAb,Bub(s,(t=new Myb,Lyb(t,(u=new hnb,u.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new vW(u.b.b)).b),t)),Bub(s,(v=new ykc,jBb(v,(w=new hnb,w.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new vW(w.b.b)).b),SY(v.ab,Ytc,true),v)),s)),e)),Bub(b,(f=new vAb,Bub(f,(x=new HAb,GAb(x,(y=new Zxb(3),TBb(y.d,'Custom Theme'),y)),x)),Bub(f,(z=new yAb,Bub(z,(A=new Myb,Lyb(A,(B=new hnb,B.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new vW(B.b.b)).b),A)),Bub(z,(C=new ykc,jBb(C,(D=new hnb,D.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new vW(D.b.b)).b),SY(C.ab,Ytc,true),C)),z)),f)),b)),a))}
rV(1247,514,loc,lfc);rV(1250,519,moc,ufc);rV(1251,1,{},wfc);rV(1258,1,Poc);_.wb=function Vfc(){Nib(this.c,Efc(this.b.b))};var JR=Flb(otc,'SetupPresenter',1247),LR=Flb(otc,'SetupView',1250),KR=Flb(otc,'SetupView_BinderImpl',1251);Uoc(zm)(35);