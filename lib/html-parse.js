const {parse} = require("node-html-parser");
const fs = require("fs");
const { PRIORITY_BELOW_NORMAL } = require("constants");

fs.readFile("static/npr.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log(" READ txt file  ");
    do_your_thing(data)
});

function list_children(node){
    node.childNodes.forEach((n,i)=>{
        let str = ''
        if(n.rawTagName) str += `<${n.rawTagName} `
        if(n.id)    str += `#${n.id} `
        if(n.className) str += `.${n.className} `
        if(str.length>0)
            console.log(str)
    })
}

// returns first child with matching id
function get_child_id(node,match){
    let ch;
    node.childNodes.forEach((n,i)=>{
        if(n.id===match)
            ch = n
    })
    return ch;
}
function get_child_class(node,match){
    let ch;
    node.childNodes.forEach((n,i)=>{
        let cl = get_class(n)
        if(cl==='archivelist')
            ch = n
    })
    return ch;
}

function get_attribute(str,attr){
    let cl = str.indexOf(attr)
    if(cl==-1)        return;
    let beg = str.indexOf('="',cl)+2
    let end = str.indexOf('"',beg)
    return str.slice(beg,end);
}

function get_class(node){
    if(!node.rawAttrs)        
        return;
    let cl = node.rawAttrs.indexOf('class')
    if(cl==-1)        return;
    let beg = node.rawAttrs.indexOf('="',cl)+2
    let end = node.rawAttrs.indexOf('"',beg)
    return node.rawAttrs.slice(beg,end);
}

function do_your_thing(data){
    
    // *
    const html = parse(data)
    
    let top = get_child_id(html,'archive-core')
    top = get_child_class(top,'archivelist')
    top = get_child_id(top,'event-more-inner')
    
    let scroll = get_child_id(html,'infinitescrollwrap')
    scroll = get_child_id(scroll,'infinitescroll')

    console.log(' fetch : ', scroll.childNodes.length + top.childNodes.length  )
    // list_children(scroll)

    let desks = []

    top.childNodes.forEach((n)=>{
        let d = search_article(n)
        if(d)   desks.push(d)
    })
    scroll.childNodes.forEach((n)=>{
        let d = search_article(n)
        if(d)   desks.push(d)
    })
    console.log(' Desks ',desks.length)
    
    save_array_to_file(desks,'desks.js')

    // for(let x=0; x<10; x++){
    //     let n = scroll.childNodes[x]
    //     search_article(n)
    // }
    
    // *
}

function save_array_to_file(arr,file){
  console.log(" saving ");
  var savefile = fs.createWriteStream(file);

  savefile.on("error", (err)=>console.log(err) );

  savefile.write("exports.data=[\n");
  arr.forEach(function (d) {
    savefile.write(JSON.stringify(d) + ",\n");
  });
  savefile.write("\n]\n");

  savefile.end();
}

function search_article(node){
    let x=0
    let meta = {}

    loop_over_children(node,(n)=>{
        let cl = get_class(n)
        if(!cl)     return;

        if(cl==='title'){
            meta.title = n.childNodes[0].childNodes[0].rawText
            let attr = n.childNodes[0].rawAttrs
            meta.href = get_attribute(attr,'href')
        }
        else if(cl==='imagewrap'){
            loop_over_children(n,(ch)=>{
                if(ch.rawTagName==='img'){
                    let src = get_attribute(ch.rawAttrs,'src')
                    meta.img = (src) ? src : ch.rawAttrs
                }
            })
        }
    })

    // console.log(' Scanned\t',meta, node )
    if(Object.keys(meta).length>0)
        return meta;
}

function loop_over_children(node,callback){
    if(node.childNodes && node.childNodes.length>0){
        node.childNodes.forEach((n)=>{
            callback(n);
            loop_over_children(n,callback);
        })
    }
}


//