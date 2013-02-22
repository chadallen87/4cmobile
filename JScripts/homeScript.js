var petLib;

// --------------------------------------------------------------------------
// THIS FUNCTION RUNS WHEN THE PAGE HAS LOADED
window.onload = function() {
	// get petLib from local storage.
	petLib = JSON.parse(localStorage.getItem("petLib"));
	// if user has petLib
	if (isEmpty(petLib)) {
		// load default pets
		initPets();
	}
	//
	viewActivePets(0);
} // end window.onload
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// FUNCTION TO INITIALIZE AND STORE DEFAULT PETS
function initPets() {
	// instaciating all pets with default values
	petLib = new Array();            // str int vit mana
	petLib.push( new Pet("Robinsauron"	,3	,8	,7	,12	));
	petLib.push( new Pet("Olavedon"			,8	,7	,8	,7	));
	petLib.push( new Pet("Godfreeboo"		,7	,7	,9	,7	));
	petLib.push( new Pet("Armstrango"		,10	,5	,10	,5	));
	petLib.push( new Pet("Rigbeast"			,8	,10	,6	,6	));
	petLib.push( new Pet("Jacksune"			,3	,9	,5	,13	));
	petLib.push( new Pet("Sompooliwag"	,5	,5	,10	,10	));
	petLib.push( new Pet("McLaughchee"	,10	,15	,10	,15	));
	petLib.push( new Pet("Barneezle"		,5	,10	,5	,10	));
	petLib.push( new Pet("Barzoolet"		,3	,10	,8	,9	));
	petLib.push( new Pet("Erix"					,9	,5	,10	,6	));
	// combine all pets into petlib

	// store petlib in localstorage
	localStorage.setItem("petLib", JSON.stringify(petLib));
} // end initPets()
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// FUNCTION RESETS SPECIFIED PET TO DEFAULT VALUES
function goHome() {
	document.getElementById("createFormDiv").style.display="none";
	document.getElementById("petDetailsDiv").style.display="inherit";
} // end goHome()
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// CLEAR PETLIB FROM LOCALSTORAGE
// localStorage.setItem("petLib", null);

// DISPLAY PETLIB FROM LOCALSTORAGE
// alert(localStorage.getItem("petLib"));

// DISPLAY PETLIB OBJECT
// petLib = JSON.parse(localStorage.getItem("petLib"));
// alert(petLib);
// --------------------------------------------------------------------------

// petLib:
// 	-- Object
// 	Robinsauron:
// 		-- Properties
// 		spec:
// 		nickName:
// 		str:
// 		intel:
// 		vital:
// 		mana:
// 		level:
// 		exp:
// 		coin:
// 		HP:
// 		MP:
// 		currFloor:
// 		currRoom:
// 		maxFloor:
// 		maxRoom:
// 		bossKey:
// 		phyAttack:
// 		magAttack:
// 		mood:
// 		happyURL:
// 		sadURL:
// 		neutralURL:
// 		activeFlag:

// 		-- Methods
// 		setters()
// 			useHP()
// 			useMP()

// 	Armstrango:
// 	Sompooliwag:
// 	McLaughchee:
// 	Barneezle:
// 	Erix:
// 	Olavedon:
// 	Godfreeboo:
// 	Jacksune:
// 	Rigbeast:
// 	Barzoolet:

// 	Monster:
// 		name:
// 		level:
// 		str:
// 		intel:
// 		vital:
// 		mana:
// 		phyAttack:
// 		magAttack:
// 		imageURL:

// 		-- Methods
// 		Constructor(currFloor, currRoom)
// 		setters()

// 	-- depending on pet bossKey.
// 	Boss:
// 		name:
// 		level:
// 		str:
// 		intel:
// 		vital:
// 		mana:
// 		phyAttack:
// 		magAttack:
// 		imageURL:

// 		-- Methods
// 		Constructor(bossKey)
// 		setters()
