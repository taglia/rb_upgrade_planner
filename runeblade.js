var ArtefactCosts = [1, 2, 4, 8, 16, 35, 70, 125, 250, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000, 650000, 800000];
var Artefacts = new Object;
Artefacts['Rozh Gemstone'] = {'order': 0, 'name': 'Rozh Gemstone', 'weight': 0, 'maxLevel': 0, 'costFactor': 'Exponential-1.25', 'effectFactor': .5, 'effectBaseValue': .5, 'costLevelModifier': -1, 'effectLabel': 'Rune Multiplier', 'effectPreSymbol': '', 'effectPostSymbol': 'X', 'url': 'http://runeblade.wikia.com/wiki/Rozh_Gemstone' };
Artefacts['Etraxxan Wristband'] = {'order': 1, 'name': 'Etraxxan Wristband', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Linear-1', 'effectFactor': 30, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'TAP Attack Bonus', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Etraxxan_Wristband' };
Artefacts['Samadun Runic Stone'] = {'order': 2, 'name': 'Samadun Runic Stone', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Linear-1', 'effectFactor': 20, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'DPS Attack Bonus', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Samadun_Rune_Stone' };
Artefacts['Headband of Perception'] = {'order': 3, 'name': 'Headband of Perception', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Linear-1', 'effectFactor': 15, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'Gold Increase', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Headband_of_Perception' };
Artefacts['Ring of Odagh'] = {'order': 4, 'name': 'Ring of Odagh', 'weight': 1, 'maxLevel': 10, 'costFactor': 'Linear-1', 'effectFactor': 2, 'effectBaseValue': 3, 'costLevelModifier': 0, 'effectLabel': 'TAP Length (in seconds)', 'effectPreSymbol': '', 'effectPostSymbol': '', 'url': 'http://runeblade.wikia.com/wiki/Ring_of_Odagh' };
Artefacts['Nanzuum Mana Cube'] = {'order': 5, 'name': 'Nanzuum Mana Cube', 'weight': 1, 'maxLevel': 10, 'costFactor': 'Linear-1', 'effectFactor': 5, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'Spell Cooldown', 'effectPreSymbol': '-', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Nanzuum_Mana_Cube' };
Artefacts['Nocri Orb of Teleportation'] = {'order': 6, 'name': 'Nocri Orb of Teleportation', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Nocri-1.5', 'effectFactor': 1, 'effectBaseValue': 1, 'costLevelModifier': 0, 'effectLabel': 'Starting Level', 'effectPreSymbol': '', 'effectPostSymbol': '', 'url': 'http://runeblade.wikia.com/wiki/Nocri_Orb_of_Teleportation' };
Artefacts['Thegian Pendant of Stealth'] = {'order': 7, 'name': 'Thegian Pendant of Stealth', 'weight': 1, 'maxLevel': 5, 'costFactor': 'Linear-10', 'effectFactor': 1, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'Enemies Evaded', 'effectPreSymbol': '', 'effectPostSymbol': '/10', 'url': 'http://runeblade.wikia.com/wiki/Thegian_Pendant_of_Stealth'};
Artefacts['Arai Talisman'] = {'order': 8, 'name': 'Arai Talisman', 'weight': 1, 'maxLevel': 25, 'costFactor': 'Exponential-1.5', 'effectFactor': 1, 'effectBaseValue': 25, 'costLevelModifier': 0, 'effectLabel': 'Master Guardian Encounter', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Arai_Talisman' };
Artefacts['Loan Agreement'] = {'order': 9, 'name': 'Loan Agreement', 'weight': 1, 'maxLevel': 10, 'costFactor': 'Exponential-1.5', 'effectFactor': -999, 'effectBaseValue': 1500, 'costLevelModifier': 0, 'effectLabel': 'Starting Gold', 'effectPreSymbol': '', 'effectPostSymbol': '', 'url': 'http://runeblade.wikia.com/wiki/Loan_Agreement' };
Artefacts['Mana Shard'] = {'order': 10, 'name': 'Mana Shard', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Exponential-1.5', 'effectFactor': 2, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'Crystal Loot Increase', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Mana_Shard' };
Artefacts['Spell Booster Charm: Invigorate'] = {'order': 11, 'name': 'Spell Booster Charm: Invigorate', 'weight': 1, 'maxLevel': 4, 'costFactor': 'Exponential-3', 'effectFactor': 1, 'effectBaseValue': 1, 'costLevelModifier': 0, 'effectLabel': 'Cooldown Removed From', 'effectPreSymbol': '', 'effectPostSymbol': ' spells', 'url': 'http://runeblade.wikia.com/wiki/Spell_Booster_Charm:_Invigorate' };
Artefacts['Spell Booster Charm: Tap Life'] = {'order': 12, 'name': 'Spell Booster Charm: Tap Life', 'weight': 1, 'maxLevel': 30, 'costFactor': 'Exponential-1.5', 'effectFactor': 0.5, 'effectBaseValue': 15, 'costLevelModifier': 0, 'effectLabel': 'Tap Life Duration', 'effectPreSymbol': '', 'effectPostSymbol': 'm', 'url': 'http://runeblade.wikia.com/wiki/Spell_Booster_Charm:_Tap_Life' };
Artefacts['Spell Booster Charm: Dark Alchemy'] = {'order': 13, 'name': 'Spell Booster Charm: Dark Alchemy', 'weight': 1, 'maxLevel': 10, 'costFactor': 'Exponential-3', 'effectFactor': 1, 'effectBaseValue': 20, 'costLevelModifier': 0, 'effectLabel': 'Dark Alchemy Duration', 'effectPreSymbol': '', 'effectPostSymbol': 's', 'url': 'http://runeblade.wikia.com/wiki/Spell_Booster_Charm:_Dark_Alchemy' };
Artefacts['Spell Booster Charm: Fireblade'] = {'order': 14, 'name': 'Spell Booster Charm: Fireblade', 'weight': 1, 'maxLevel': 150, 'costFactor': 'Exponential-1.5', 'effectFactor': 2, 'effectBaseValue': 30, 'costLevelModifier': 0, 'effectLabel': 'Fireblade Duration', 'effectPreSymbol': '', 'effectPostSymbol': 's', 'url': 'http://runeblade.wikia.com/wiki/Spell_Booster_Charm:_Fireblade' };
Artefacts['Cursed Divining Rod'] = {'order': 15, 'name': 'Cursed Divining Rod', 'weight': 1, 'maxLevel': 6, 'costFactor': 'Exponential-3', 'effectFactor': 1, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'Chests Detected', 'effectPreSymbol': '', 'effectPostSymbol': '', 'url': 'http://runeblade.wikia.com/wiki/Cursed_Divining_Rod' };
Artefacts['Rune Booster Charm: Rozh Gemstone'] = {'order': 16, 'name': 'Rune Booster Charm: Rozh Gemstone', 'weight': 1, 'maxLevel': 40, 'costFactor': 'Linear-1', 'effectFactor': -2, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'Rozh Cost Reduction', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Rune_Booster_Charm:_Rozh_Gemstone' };
Artefacts['Umbaorian Amulet'] = {'order': 17, 'name': 'Umbaorian Amulet', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Exponential-1.5', 'effectFactor': 1, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'Next Generation Starting Bonus', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Umbaorian_Amulet' };
Artefacts['Mauhak Battle Focus'] = {'order': 18, 'name': 'Mauhak Battle Focus', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Exponential-1.5', 'effectFactor': 1, 'effectBaseValue': 30, 'costLevelModifier': 0, 'effectLabel': 'Guardian Battle Duration', 'effectPreSymbol': '', 'effectPostSymbol': 's', 'url': 'http://runeblade.wikia.com/wiki/Mauhak_Battle_Focus' };
Artefacts['Ring of Engagement'] = {'order': 19, 'name': 'Ring of Engagement', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Exponential-1.5', 'effectFactor': 1, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'DPS Converted to TAP', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Ring_of_Engagement' };
Artefacts['Mithrode Jewel'] = {'order': 20, 'name': 'Mithrode Jewel', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Exponential-1.5', 'effectFactor': 1, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'DPS Increase Per Hour', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Mithrode_Jewel' };
Artefacts['Fury Goader'] = {'order': 21, 'name': 'Fury Goader', 'weight': 1, 'maxLevel': 90, 'costFactor': 'Exponential-2', 'effectFactor': 1, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'Critical Hit Probability', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Fury_Goader' };
Artefacts['Death Hex'] = {'order': 22, 'name': 'Death Hex', 'weight': 1, 'maxLevel': 25, 'costFactor': 'Exponential-3', 'effectFactor': -1, 'effectBaseValue': 100, 'costLevelModifier': 0, 'effectLabel': 'Enemy Starting Health', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Death_Hex' };
Artefacts['Warriors Periapt'] = {'order': 23, 'name': 'Warriors Periapt', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Exponential-1.5', 'effectFactor': 1, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'TAP Incease Per Endurance', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Warriors_Periapt' };
Artefacts['Focus of Elevation'] = {'order': 24, 'name': 'Focus of Elevation', 'weight': 1, 'maxLevel': 0, 'costFactor': 'Elevation-1', 'effectFactor': 0.1, 'effectBaseValue': 0, 'costLevelModifier': 0, 'effectLabel': 'DPS and TAP Increase Per Level', 'effectPreSymbol': '', 'effectPostSymbol': '%', 'url': 'http://runeblade.wikia.com/wiki/Focus_of_Elevation' };
var ExistingArtefacts = 0;
var ArtefactsTotal = 0;
var CrystalsToSpend = 0;
var CrystalsSpentBuying = 0;
var CrystalsSpentUpgrading = 0;
var CrystalsRemaining = 0;
var CookieExpireDays = 30;
function initializePage()
{
  var divTableObject = document.getElementById('ArtefactTableDiv');
  for (var artefactName in Artefacts)
  {
    var artefactObject = Artefacts[artefactName];
    var artefactDiv = document.createElement('div');
    artefactDiv.id = artefactObject['name'] + ' Div';
    artefactDiv.className = 'div-table-row';
    artefactDiv.innerHTML = '<div class="div-table-col-label"><a target="_blank" href="' + artefactObject['url'] + '">' + artefactObject['name'] + '</div>';
    if (artefactObject['weight'] == 1)
    {
      artefactDiv.innerHTML += '<div class="div-table-col-value"><a onclick="changeArtefactCurrentLevel(\'' + artefactObject['name'] + '\', -5)">&lt;&lt;</a> <a onclick="changeArtefactCurrentLevel(\'' + artefactObject['name'] + '\', -1)">-</a> <strong id="' + artefactObject['name'] + ' Current Level">0</strong> <a onclick="changeArtefactCurrentLevel(\'' + artefactObject['name'] + '\', 1)">+</a> <a onclick="changeArtefactCurrentLevel(\'' + artefactObject['name'] + '\', 5)">&gt;&gt;</a></div>';
    }
    else
    {
      artefactDiv.innerHTML += '<div class="div-table-col-value">&nbsp;</div>';
    }
    artefactDiv.innerHTML += '<div class="div-table-col-value"><a onclick="changeArtefactUpgradedLevel(\'' + artefactObject['name'] + '\', -5)">&lt;&lt;</a> <a onclick="changeArtefactUpgradedLevel(\'' + artefactObject['name'] + '\', -1)">-</a> <strong id="' + artefactObject['name'] + ' Upgraded Level">0</strong> <a onclick="changeArtefactUpgradedLevel(\'' + artefactObject['name'] + '\', 1)">+</a> <a onclick="changeArtefactUpgradedLevel(\'' + artefactObject['name'] + '\', 5)">&gt;&gt;</a></div>';
    artefactDiv.innerHTML += '<div class="div-table-col-value"><strong id="' + artefactObject['name'] + ' Cost">0</strong></div>';
    artefactDiv.innerHTML += '<div class="div-table-col-effect" id="' + artefactObject['name'] + ' Effect">' + artefactObject['effectLabel'] + ': </div>';
    artefactObject['currentLevel'] = 0;
    artefactObject['upgradedLevel'] = 0;
    artefactObject['upgradeCost'] = 0;
    artefactObject['artefactDiv'] = artefactDiv;
    setArtefactOwnership(artefactObject, 0);
    divTableObject.appendChild(artefactDiv);
  }
  document.getElementById('CrystalsSpentBuying').setAttribute("readonly", "true");
  document.getElementById('CrystalsSpentUpgrading').setAttribute("readonly", "true");
  document.getElementById('CrystalsRemaining').setAttribute("readonly", "true");
  var queryString = decodeURIComponent(window.location.search.substring(1));
  if (queryString.match(/\bs=(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+)/))
  {
    loadFromQueryString(1);
  }
  else
  {
    loadFromCookie(0);
  }
}
function setArtefactOwnership(artefactObject, ownership)
{
  artefactObject['owned'] = ownership;
  if (artefactObject['owned'])
  {
    artefactObject['artefactDiv'].style.backgroundColor = '#CFC';
  }
  else
  {
    artefactObject['artefactDiv'].style.backgroundColor = '#FCC';
  }
}
function changeArtefactCurrentLevel(artefactName, increment)
{
  var artefactObject = Artefacts[artefactName];
  setArtefactCurrentLevel(artefactName, artefactObject['currentLevel'] + increment);
}
function setArtefactCurrentLevel(artefactName, newCurrentLevel)
{
  var artefactObject = Artefacts[artefactName];
  if (newCurrentLevel < 0)
  {
    newCurrentLevel = 0;
  }
  if ( (artefactObject['maxLevel'] != 0 ) &&
      (newCurrentLevel > artefactObject['maxLevel']) )
  {
    newCurrentLevel = artefactObject['maxLevel'];
    //alert(artefactObject['name'] + '\'s max level is ' + artefactObject['maxLevel']);
  }
  if ( (newCurrentLevel == 0) && (artefactObject['currentLevel'] > 0) )
  {
    ExistingArtefacts -= artefactObject['weight'];
    if (artefactObject['upgradedLevel'] == 0)
    {
      setArtefactOwnership(artefactObject, 0);
      ArtefactsTotal -= artefactObject['weight'];
    }
  }
  if ( (newCurrentLevel > 0) && (artefactObject['currentLevel'] == 0) )
  {
    ExistingArtefacts += artefactObject['weight'];
    if (artefactObject['upgradedLevel'] == 0)
    {
      setArtefactOwnership(artefactObject, 1);
      ArtefactsTotal += artefactObject['weight'];
    }
  }
  artefactObject['currentLevel'] = newCurrentLevel;
  document.getElementById(artefactObject['name'] + ' Current Level').innerHTML = artefactObject['currentLevel'];
  if (artefactObject['currentLevel'] > artefactObject['upgradedLevel'])
  {
    setArtefactUpgradedLevel(artefactName, artefactObject['currentLevel']);
  }
  calculateArtefactUpgradedCostAndEffect(artefactName);
}
function changeArtefactUpgradedLevel(artefactName, increment)
{
  var artefactObject = Artefacts[artefactName];
  setArtefactUpgradedLevel(artefactName, artefactObject['upgradedLevel'] + increment);
}
function setArtefactUpgradedLevel(artefactName, newUpgradedLevel)
{
  var artefactObject = Artefacts[artefactName];
  if (newUpgradedLevel < artefactObject['currentLevel'])
  {
    newUpgradedLevel = artefactObject['currentLevel'];
  }
  if ( (artefactObject['maxLevel'] != 0 ) &&
      (newUpgradedLevel > artefactObject['maxLevel']) )
  {
    newUpgradedLevel = artefactObject['maxLevel'];
    //alert(artefactObject['name'] + '\'s max level is ' + artefactObject['maxLevel']);
  }
  if ( (newUpgradedLevel == 0) && (artefactObject['owned'] == 1) )
  {
    setArtefactOwnership(artefactObject, 0);
    ArtefactsTotal -= artefactObject['weight'];
  }
  if ( (newUpgradedLevel > 0) && (artefactObject['owned'] == 0) )
  {
    setArtefactOwnership(artefactObject, 1);
    ArtefactsTotal += artefactObject['weight'];
  }
  artefactObject['upgradedLevel'] = newUpgradedLevel;
  document.getElementById(artefactObject['name'] + ' Upgraded Level').innerHTML = artefactObject['upgradedLevel'];
  calculateArtefactUpgradedCostAndEffect(artefactName);
}
function calculateArtefactCosts()
{
  CrystalsSpentBuying = 0;
  for (var i=ExistingArtefacts; i<ArtefactsTotal; i++)
  {
    CrystalsSpentBuying += ArtefactCosts[i];
  }
  document.getElementById('CrystalsSpentBuying').value = CrystalsSpentBuying;
  calculateCrystalsRemaining();
}
function changeCrystalsToSpend()
{
  CrystalsToSpend = document.getElementById('CrystalsToSpend').value;
  if (!CrystalsToSpend.match(/^\d+$/))
  {
    CrystalsToSpend = 0;
    document.getElementById('CrystalsToSpend').value = '';
  }
  calculateCrystalsRemaining();
}
function calculateCrystalsRemaining()
{
  CrystalsRemaining = CrystalsToSpend - (CrystalsSpentBuying + CrystalsSpentUpgrading);
  document.getElementById('CrystalsRemaining').value = CrystalsRemaining;
}
function calculateArtefactUpgradedCostAndEffect(artefactName)
{
  var artefactObject = Artefacts[artefactName];
  var artefactCostObject = document.getElementById(artefactObject['name'] + ' Cost');
  var artefactEffectObject = document.getElementById(artefactObject['name'] + ' Effect');
  var currentArtefactCost = artefactCostObject.innerHTML;
  var newArtefactCost = 0;
  for (var i=artefactObject['currentLevel']+1; i<=artefactObject['upgradedLevel']; i++)
  {
    newArtefactCost += getArtefactLevelCost(artefactObject, i);
  }
  artefactCostObject.innerHTML = newArtefactCost;
  artefactEffectObject.innerHTML = getArtefactLevelEffect(artefactObject, artefactObject['upgradedLevel']);
  CrystalsSpentUpgrading = CrystalsSpentUpgrading + (newArtefactCost - currentArtefactCost);
  document.getElementById('CrystalsSpentUpgrading').value = CrystalsSpentUpgrading;
  calculateArtefactCosts();
}
function getArtefactLevelCost(artefactObject, artefactLevel)
{
  if (artefactLevel < 2)
  {
    return(0);
  }
  var artefactLevelCost = 0;
  var artefactParts = artefactObject['costFactor'].split('-');
  var artefactCostType = artefactParts[0];
  var artefactCostFactor = artefactParts[1];
  var artefactCostLevelModifier = artefactObject['costLevelModifier'];
  if (artefactCostType === 'Linear')
  {
    artefactLevelCost = (artefactLevel + artefactCostLevelModifier) * artefactCostFactor;
  }
  else if (artefactCostType === 'Exponential')
  {
    artefactLevelCost = Math.round(Math.pow(artefactLevel + artefactCostLevelModifier, artefactCostFactor));
  }
  else if (artefactCostType === 'Elevation')
  {
    artefactLevelCost = (artefactLevel + artefactCostLevelModifier) * artefactLevel;
  }
  else if (artefactCostType === 'Nocri')
  {
    if (artefactLevel < 75)
    {
      artefactLevelCost = Math.round(Math.pow(artefactLevel + artefactCostLevelModifier, artefactCostFactor));
    }
    else
    {
      artefactLevelCost = Math.round((1 + (((artefactLevel-1) - 74)/50)) * Math.pow(artefactLevel, 1.5));
    }
  }
  return(artefactLevelCost);
}
function getArtefactLevelEffect(artefactObject, artefactLevel)
{
  if (artefactLevel == 0)
  {
    return(artefactObject['effectLabel'] + ': ');
  }
  var artefactLevelEffect = 0;
  var artefactEffectBaseValue = artefactObject['effectBaseValue'];
  var artefactEffectFactor = artefactObject['effectFactor'];
  if (artefactEffectFactor == -999)
  {
    artefactLevelEffect = commify(artefactObject['effectBaseValue'] + Math.round(Math.pow(3.98, artefactLevel)) - 4);
  }
  else
  {
    artefactLevelEffect = artefactEffectBaseValue + (artefactLevel * artefactEffectFactor);
  }
  return(artefactObject['effectLabel'] + ': <strong>' + artefactObject['effectPreSymbol'] + artefactLevelEffect + artefactObject['effectPostSymbol'] + '</strong>');
}
function commify(number)
{
  return(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}
function resetAll()
{
  document.getElementById('CrystalsToSpend').value = 0;
  changeCrystalsToSpend();
  for (var artefactName in Artefacts)
  {
    if (Artefacts[artefactName]['weight'] != 0)
    {
      setArtefactCurrentLevel(artefactName, 0);
    }
    setArtefactUpgradedLevel(artefactName, 0);
  }
}
function clearUpgrades()
{
  for (var artefactName in Artefacts)
  {
    setArtefactUpgradedLevel(artefactName, 0);
  }
}
function transferUpgrades()
{
  for (var artefactName in Artefacts)
  {
    if(artefactName != 'Rozh Gemstone') {
      var artefactObject = Artefacts[artefactName];
      setArtefactCurrentLevel(artefactName, artefactObject['upgradedLevel']);
    }
  }
}
function byOrder(a, b)
{
  return(Artefacts[a]['order'] - Artefacts[b]['order']);
}
function getSortedArtefactNames()
{
  var sortArray = [];
  for (var key in Artefacts) {sortArray.push(key);}
  sortArray.sort(byOrder);
  return(sortArray);
}
function getSaveString()
{
  var saveString = 'c:' + CrystalsToSpend;
  var artefactNameArray = getSortedArtefactNames();
  for (var i=0; i<artefactNameArray.length; i++)
  {
    saveString += ',a' + Artefacts[artefactNameArray[i]]['order'] + ':';
    saveString += Artefacts[artefactNameArray[i]]['currentLevel'] + '-';
    saveString += Artefacts[artefactNameArray[i]]['upgradedLevel'];
  }
  saveString += ';';
  return(saveString);
}
function getCookieExpireString()
{
  var d = new Date();
  d.setTime(d.getTime() + (CookieExpireDays*24*60*60*1000));
  return "expires="+d.toUTCString()+';';
}
function saveToCookie()
{
  document.cookie = 'RunebladeSaveData=' + getSaveString() + ' ' + getCookieExpireString();
}
function saveToTextarea()
{
  document.getElementById('SaveDataTextarea').value = getSaveString();
}
function loadFromCookie(showAlert)
{
  var loaded = 0;
  if ( (document.cookie) && (document.cookie.length > 0) )
  {
    var saveStringMatches = document.cookie.match(/RunebladeSaveData=(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+)/);
    if (saveStringMatches.length > 0)
    {
      loaded = 1;
      loadSaveString(saveStringMatches[1]);
    }
  }
  if (showAlert && !loaded)
  {
    alert('no cookie save data found!');
  }
}
function loadFromTextarea(showAlert)
{
  var loaded = 0;
  var textareaMatches = document.getElementById('SaveDataTextarea').value.match(/^\s*(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+);?\s*$/);
  if ( (textareaMatches) && (textareaMatches.length > 0) )
  {
    loaded = 1;
    loadSaveString(textareaMatches[1]);
  }
  if (showAlert && !loaded)
  {
    alert('invalid save string in textarea!');
  }
}
function loadFromQueryString(showAlert)
{
  var loaded = 0;
  var queryString = decodeURIComponent(window.location.search.substring(1));
  if ( (queryString) && (queryString.match(/\bs=(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+)/)) )
  {
    queryStringMatches = queryString.match(/\bs=(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+)/);
    if (queryStringMatches.length > 0)
    {
      loaded = 1;
      loadSaveString(queryStringMatches[1]);
    }
  }
  if (showAlert && loaded)
  {
    alert('data loaded from query string!');
  }
}
function loadSaveString(saveString)
{
  var saveStringPartArray = saveString.split(',');
  var artefactNameArray = getSortedArtefactNames();
  for (var i=0; i<saveStringPartArray.length; i++)
  {
    var partArray = saveStringPartArray[i].split(':');
    if (partArray[0] === 'c')
    {
      document.getElementById('CrystalsToSpend').value = partArray[1];
      changeCrystalsToSpend();
    }
    else if (partArray[0].match(/^a/))
    {
      var saveArtefactIndex = partArray[0].replace(/^a/, '');
      var saveArtefactValues = partArray[1].split('-');
      if (Artefacts[artefactNameArray[saveArtefactIndex]]['weight'] != 0)
      {
        setArtefactCurrentLevel(artefactNameArray[saveArtefactIndex], parseInt(saveArtefactValues[0]));
      }
      setArtefactUpgradedLevel(artefactNameArray[saveArtefactIndex], parseInt(saveArtefactValues[1]));
    }
  }
}
