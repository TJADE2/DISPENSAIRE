var formulaire=document.getElementById("formulaire");
			
formulaire.onsubmit=function()
{
			
	var nom=document.getElementById("nom"),
	prenom=document.getElementById("prenom"),
	mail=document.getElementById("mailto"),
	naissance=document.getElementById("date"),
	age=document.getElementById("age"),
	departement=document.getElementById("depart"),
	filiere=document.getElementById("fil"),
	niveau=document.getElementById("niveau"),
	cycle=document.getElementById("cycle"),
	matricule=document.getElementById("matri");
			
		if ( nom.value && prenom.value )
		{
			alert("cliquer sur OK pour continuer");
		}else{
				
			alert("veillez saisir tous les champs!");
				
		}
}
		