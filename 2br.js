function person (name,age,dob)
{
    this.name=name
    this.age=age
    this.dob=dob
    this.display=function(){
    console.log("name"+ this.name )
    }
}
    var dilshad=new person("dilshad",18,2002)


dilshad.display()