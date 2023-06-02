exports.addition=(x,y)=>{
    return x+y
}

exports.factorial=(num)=>{
  f=1;
  for(var i=1;i<=num;i++){
    f=f*i;
  }
  return f;
}