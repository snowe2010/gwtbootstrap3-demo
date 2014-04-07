function Tlc(){}
function Zlc(){}
function amc(){}
function bmc(){bmc=rBc;Ylc=new amc}
function Rlc(){Clb(this,Vlc(new Wlc))}
function Ilc(a,b,c){ilb.call(this,a,b,c,(q_b(),p_b))}
function Boc(a){var b;if(!a.q){b=new Rlc(new Tlc);a.q=b}return a.q}
function cmc(a){var b;b=new Xrb;b.b.b+=mIc;Rrb(b,m_(a));b.b.b+=nIc;return new U$(b.b.b)}
function dmc(a){var b;b=new Xrb;b.b.b+=mIc;Rrb(b,m_(a));b.b.b+=nIc;return new U$(b.b.b)}
function Aoc(a){var b;if(!a.p){b=new Ilc(rkb(Olb(a.b)),Boc(a),zoc(a));Jkb((Plb(a.b),b),$lb(Plb(a.b)));a.p=b}return a.p}
function Wlc(){this.f=(new Zlc,bmc(),Ylc);_lc(this.f);this.b=lr($doc);this.d=lr($doc);this.c=new S0(this.b);this.e=new S0(this.d)}
function _lc(a){if(!a.b){a.b=true;bv();ev((Ry(),'.GOBEEQNHK{background-color:#fcf2f2;border-color:#dfb5b4;}.GOBEEQNIK{margin-top:0 !important;}.GOBEEQNJK{margin-left:5px;}'));return true}return false}
function Vlc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I;b=new yGb;jzb(b,(c=new YBb(fIc),jzb(c,(d=new kFb,d.b=VGc,jFb(d),d)),jzb(c,(e=new Wzb,jzb(e,(f=new VCb(4),r1(f._,'GOBEEQNIK',true),f.c=AOc,TCb(f),f)),jzb(e,new IDb((n=new Xrb,n.b.b+='To use Offline, you must first add the extras module to your project. In Maven:',new U$(n.b.b)).b)),jzb(e,(g=new vwc,pGb(g,(o=new Xrb,o.b.b+=BOc,new U$(o.b.b)).b),r1(g._,jIc,true),g)),jzb(e,new IDb((p=new Xrb,p.b.b+=COc,new U$(p.b.b)).b)),jzb(e,(i=new vwc,pGb(i,(q=new Xrb,q.b.b+='&lt;inherits name="org.gwtbootstrap3.extras.cachemanifest.Offline"/&gt;',new U$(q.b.b)).b),r1(i._,jIc,true),i)),r1(e._,'GOBEEQNHK',true),e)),jzb(c,(j=new CFb,jzb(j,(r=new NFb(cmc(a.b).b),s=U0(r._),R0(a.c),s.c?xq(s.c,s.b,s.d):X0(s.b),xeb(r,(t=new VCb(3),t.c='What is Offline?',TCb(t),t),R0(a.c)),r)),jzb(j,(u=new FFb,jzb(u,new Zyb((v=new Xrb,v.b.b+="<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the <b>cache manifest<\/b>.<br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'>http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5<\/a> <\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage.<\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\/b> needs to reflect this new set of files each time.<\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile.<\/p>",new U$(v.b.b)).b)),u)),jzb(j,new JFb),j)),jzb(c,(k=new CFb,jzb(k,(w=new NFb(dmc(a.d).b),x=U0(w._),R0(a.e),x.c?xq(x.c,x.b,x.d):X0(x.b),xeb(w,(y=new VCb(3),y.c='How to configure?',TCb(y),y),R0(a.e)),w)),jzb(k,(z=new FFb,jzb(z,new IDb((A=new Xrb,A.b.b+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new U$(A.b.b)).b)),jzb(z,(B=new vwc,pGb(B,(C=new Xrb,C.b.b+='&lt;extend-configuration-property name="cachemanifest_static_files" value="index.html" /&gt;\\n',new U$(C.b.b)).b),r1(B._,jIc,true),B)),jzb(z,new IDb((D=new Xrb,D.b.b+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new U$(D.b.b)).b)),jzb(z,(E=new vwc,pGb(E,(F=new Xrb,F.b.b+='&lt;inherits name="org.gwtbootstrap3.extras.cachemanifest.Offline"/&gt;\\n &lt;add-linker name="offline" /&gt;',new U$(F.b.b)).b),r1(E._,jIc,true),E)),jzb(z,new IDb((G=new Xrb,G.b.b+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new U$(G.b.b)).b)),jzb(z,(H=new vwc,pGb(H,(I=new Xrb,I.b.b+='&lt;!doctype html&gt;\\n &lt;html manifest="&lt;modulename&gt;/appcache.manifest"&gt;\\n ....\\n &lt;/html&gt;\\n',new U$(I.b.b)).b),r1(H._,jIc,true),H)),z)),jzb(k,new JFb),k)),c));return b}
QZ(1230,525,iCc,Ilc);QZ(1233,530,jCc,Rlc);QZ(1234,1,{},Tlc);QZ(1235,1,{},Wlc);_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;QZ(1236,1,{},Zlc);var Ylc=null;QZ(1237,1,{},amc);_.b=false;QZ(1289,1,KCc);_.Ab=function mpc(){rnb(this.c,Aoc(this.b.b))};var bU=lqb(AHc,'OfflinePresenter',1230),gU=lqb(AHc,'OfflineView',1233),fU=lqb(AHc,'OfflineView_BinderImpl',1234),cU=lqb(AHc,'OfflineView_BinderImpl$Widgets',1235),eU=lqb(AHc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1236),dU=lqb(AHc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1',1237);RCc(hn)(32);