function Calculo(){
 var dolF = document.getElementById('dolfut')
 var dolC = document.getElementById('dolcom')
 var di = document.getElementById('juros')
 var venc = document.getElementById('date')
 var riacao = document.getElementById('dx') 
 var res = document.getElementById ('res')

 if(dolF.value.length == 0 || dolC.value.length == 0 || di.value.length == 0
    || venc.value.length == 0 || riacao.value.length == 0 ){
        window.alert('Dados Incompletos ...')
    } else{ 
       let df = Number(dolF.value)
       let dc = Number(dolC.value)
       let di1 = Number(di.value)
       let vencimento = Number(venc.value)
       let tx = ((1+di1)**(1/252)-1)*vencimento
       let variac = Number(riacao.value)
       let justo = (dc*(tx/100)+dc)
       
       let ab = (df*(variac/100)+df) // revisar calculo
       let delta = ((df*(0,5/100))/10) // revisar calculo
       let maxima = ((ab*(tx/100)+ab)+delta) // revisar calculo
       let minima = ((ab*(tx/100)+ab)-delta) // revisar calculo
       res;jt.innerHTML = `JUSTO: ${justo.toPrecision(6)}`
       res;mx.innerHTML = `MAXIMA: ${maxima.toPrecision(6)}`
       res;abertura.innerHTML = `ABERTURA: ${ab.toPrecision(6)}`
       res;mi.innerHTML = `MINIMA: ${minima.toPrecision(6)}` 
       res;taxa.innerHTML = `TAXA OVER ${tx}`
    }
}