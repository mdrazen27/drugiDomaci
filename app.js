var movies=[{
    odgledan: false,
    name: "Titanik",
    year: "1997",
    country:"SAD",
    reminder:"Drama",
    actors:["James Cameron"]
},
{
    odgledan: false,
    name: "Scarface",
    year: "1983",
    country:"SAD",
    reminder:"Krimi / Drama",
    actors:["Al Pacino","Michelle Pfeiffer"]
},
{
    odgledan: false,
    name: "Gladiator",
    year: "2000",
    country:"Sjedinjene Američke Države",
    reminder:"Akcija / Avantura",
    actors:["Russell Crowe","Joaquin Phoenix", "Robert De Niro"]
}]

function noviDisp(unos=null){
if(unos!=null)movies.push(unos)

    let c=`<table class=" table mt-5 text-center">
    <thead>
      <tr>
        <th>Odgledan</th>
        <th>Naziv</th>
        <th>Godina</th>
        <th>Država</th>
        <th>Napomena</th>
        <th>Glumci</th>
      </tr>
    </thead>
    <tbody>`;
    movies.forEach((movie,index)=>{
        c+=`<tr id="pozadina${index}" ${gledac(movie)}>
        <td><input type="checkbox" class="cek" id="cb${index}" ${cin(movie)}></td>
        <td>${movie.name}</td>
        <td>${movie.year}</td>
        <td>${movie.country}</td>
        <td>${movie.reminder}</td>
        <td>${movie.actors.join(", ")}</td>
        </tr>`})

    document.getElementById("tableWrapper").innerHTML=c+"</tbody></table>";
    checkListener();
    
}

function checkListener(){document.querySelectorAll(".cek").forEach((elem,index)=>{elem.addEventListener("click",(e)=>{birac(index)})})}

function birac(num){
    let t=document.getElementById("cb"+num).checked;
    if(t){promjenaPozadinePoz(num)}
    else promjenaPozadineNeg(num)
    }
    
    function promjenaPozadineNeg(br){
        let pozadina=document.getElementById("pozadina"+br)
        pozadina.classList.add("nije")
        pozadina.classList.remove("jeste")
        movies[br].odgledan=false;
    }
    function promjenaPozadinePoz(br){
        let pozadina=document.getElementById("pozadina"+br)
        pozadina.classList.add("jeste")
        pozadina.classList.remove("nije")
        movies[br].odgledan=true;
    }

function gledac(obj){
    if(obj.odgledan==true)return `class="jeste"`
    return `class="nije"`
}
function cin(obj){
    if(obj.odgledan==true)return `checked`
}

function getInputs(){
    let watched=false;
    let ime=document.getElementById("ime_filma").value;
    let drzava=document.getElementById("drzava_filma").value||"-";
    let godina=document.getElementById("godina_filma").value;
    let actors=document.getElementById("glumci_filma").value;
    let napomena=document.getElementById("napomena_filma").value||"-";
let actor=actors.split(",");
let glumci=[];
actor.forEach(glumac=>glumci.push(glumac.trim()));
    return {
        odgledan: watched,
        name: ime,
        year: godina,
        country: drzava,
        reminder: napomena,
        actors:glumci
    }
}

function clearInputs(){
    let inputs=document.getElementsByClassName("form-control");
    for(i of inputs){
        i.value="";
    }
}

document.getElementById("cancle").addEventListener("click",()=>clearInputs());
document.getElementById("dodavanje").addEventListener("submit",(e)=>{e.preventDefault();
noviDisp(getInputs());
clearInputs()});

noviDisp();