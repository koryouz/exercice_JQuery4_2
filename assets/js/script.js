$(function(){
  $('#submit').click(function(){
    var note0 = parseInt($('#noteInput0').val());
    var note1 = parseInt($('#noteInput1').val());
    var note2 = parseInt($('#noteInput2').val());
    var note3 = parseInt($('#noteInput3').val());
    var note4 = parseInt($('#noteInput4').val());
    var moyNote = (note0 + note1 + note2 + note3 + note4)/5;
    if (note0 < 0 || note1 < 0 || note2 < 0 || note3 <  0 || note4 < 0){
      alert('Mettre des valeurs positives !');
    }
    if (note0 > 20 || note1 > 20 || note2 > 20 || note3 > 20 || note4 > 20){
      alert('Mettre des valeurs corrects !');
    }
    else if(moyNote <= 10){
      alert('Appréciation : "En dessous de la moyenne".\nMoyenne : '+moyNote);
    }
    else if(moyNote >= 10 && moyNote <= 13){
      alert('Appréciation : "Moyen".\nMoyenne : '+moyNote);
    }
    else if(moyNote >= 13 && moyNote <= 16){
      alert('Appréciation :  "Bien".\nMoyenne : '+moyNote);
    }
    else if(moyNote >= 16 && moyNote < 20){
      alert('Appréciation : "Très bien".\nMoyenne : '+moyNote);
    }
    else{
      alert('Appréciation : "Excellent".\nMoyenne : '+moyNote);
    }
  });
});
