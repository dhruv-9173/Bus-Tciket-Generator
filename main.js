currbus='';

let list=[
    {
        name: "Raftaar",
        from: "Jammu",
        Des: "Amritsar",
        time: "11:00AM (mon to fri)",
        seats: [],
       
    },
    {
        name: "Raftaar",
        from: "Jammu",
        Des: "Delhi",
        time: "11:00AM (mon to fri)",
        seats:[],
        
    },
    {
        name: "Raftaar",
        from: "Jammu",
        Des: "Katra",
        time: "11:00AM (mon to fri)",
        seats:[],
        
    },
    {
        name: "Raftaar",
        from: "Jammu",
        Des: "Ludhiana",
        time: "11:00AM (mon to fri)",
        seats:[],
        
    }
];

for(let i=0;i<list.length;i++){
    for(let j=0;j<50;j++)
    {
    list[i].seats[j]=true;
    }
}
function creatediv(i){
    let b=document.createElement('div');
    let c=document.createElement('button');
    let d=document.createElement('a');
    c.innerHTML="Check Ticket Avilability";
    c.id="b";
    b.id="sr";
    c.addEventListener("click",function(){
       currbus=i;
       document.getElementById('main').style.display="none";
       document.getElementById('outer').style.display='block';
       ticketavail();
    });
    b.innerHTML=list[i].name+"\n"+list[i].from+" to "+list[i].Des+'\nTiming: '+list[i].time;
    b.style.fontSize="20px";
    d.appendChild(c);
    b.appendChild(d);  
    return b;
}
function show(x,y='None'){
    
    x.style.display="block";
    y.style.display='none'
}
function hide(){
    document.getElementById("results").style.display="none";
}
function searchbusbyname()
{
    document.getElementById('results').innerHTML='';
    let x=document.getElementById("search").value;
    let flag=false;
    for(let i=0;i<list.length;i++){
        if(x.toLowerCase()==list[i].name.toLowerCase()){
            let b=creatediv(i);
           document.getElementById("results").appendChild(b);
           flag=true;
        }
        
    }
    if (!flag){
        let a=document.getElementById("results");
        a.innerHTML="No Results found";
    }
 
}
function searchbusbyroute(){
    document.getElementById('re').innerHTML=''; 
    let x=document.getElementById("des").value;
    let flag=true;
    for(let i=0;i<list.length;i++){
        if(x.toLowerCase()==list[i].Des.toLocaleLowerCase()){
            let b=creatediv(i);

           document.getElementById('re').appendChild(b);
           flag=false;
        }
       

    }
    if (flag){
        let a=document.getElementById("re");
        a.innerHTML="No Results found";
    }
 
}
function AllBus(){
    document.getElementById('re').innerHTML='';
    for(let i=0;i<list.length;i++){
          let b=creatediv(i); 
           document.getElementById('re').appendChild(b);
        }
     
    
}

function ticketavail(){
    let x=Number(currbus);
    document.getElementById('bus').innerHTML=list[x].name+" ("+list[x].from+" to "+list[x].Des+")";
    for(let i=0;i<list[x].seats.length;i++){
        if(list[x].seats[i]==false){
            document.getElementById(String(i+1)).style.background="red";
        }
    }
}
seats=[];
ns=0;
function seatschose(x,n){

    let i=Number(currbus);
    if(list[i].seats[n-1]==true){
        x.style.background='orange';
       ns=ns+1;
        document.getElementById('n').innerHTML=String(ns);
        seats.push(n);
        list[i].seats[n-1]=false;
    }
    else if(list[i].seats[n-1]==false && x.style.background!='red'){
        x.style.background='white';
        ns=ns-1;
        document.getElementById('n').innerHTML=String(ns);
        list[i].seats[n-1]=true;
        seats.pop(n); 
        
    }
    else{
        x.addEventListener('click',function(){
            alert("Seat is already booked");
        })
    }
    document.getElementById('s').innerHTML=seats;

}
let cost=50;
function genticket(){
    if(document.getElementById('nme').value=='' || document.getElementById('m').value=='' || ns==0){
        alert("Please fill all the details");
        return;
    }
    else if(document.getElementById('m').value.length != 10){
        alert("Mobile No. should be 10 digits.");
        return;
    }
   document.getElementById('seat').innerHTML=document.getElementById('s').innerHTML;
   document.getElementById('from').innerHTML=list[Number(currbus)].from;
   document.getElementById('d').innerHTML=list[Number(currbus)].Des;
   document.getElementById('bname').innerHTML=list[Number(currbus)].name;
   document.getElementById('pname').innerHTML=document.getElementById('nme').value;
   document.getElementById('Mnum').innerHTML=document.getElementById('m').value;
   document.getElementById('cost').innerHTML=ns*cost;
   document.getElementById('nos').innerHTML=ns;
   document.getElementById("outer").style.display="none";
   document.getElementById('Ticket').style.display='block';
   alert("Your ticket has been booked.")
   ns=0;
   seats=[];
   document.getElementById('s').innerHTML='';
   document.getElementById('n').innerHTML='0';

}




