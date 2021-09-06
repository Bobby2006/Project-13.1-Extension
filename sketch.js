var x = z;

function setup() {
  createCanvas(400,400);
  background("White");
}

function draw() 
{
  Vowels();
  //printVowels();
  drawSprites();
}

function Vowels()
{
     var x = Math.round(random(1,5));
     switch(x)
     {
        case "a":console.log("Vowel");
                  break;
        case "e":console.log("Vowel");
                  break;
        case "i":console.log("Vowel");
                  break;
        case "o":console.log("Vowel");
                  break;
        case "u":console.log("Vowel");
                  break;
        default:console.log("Consonant");
                  break;
     }
}

/*function printVowels()
{
    var rn = Math.round(random(1,5)); 
    switch(rn)
    {
      case 1:console.log("a");
              break;

      case 2:console.log("e");
              break;
      
      case 3:console.log("i");
              break;

      case 4:console.log("o");
              break;

      case 5:console.log("u");
              break;

      default:console.log("a");
              break;
    }
} */