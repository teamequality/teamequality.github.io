$(document).ready(()=>{
    const $kssonB = $('#kssonButton');
    const $kssonT = $('#kssonText');
    const $byteB = $('#byteButton');
    const $byteT = $('#byteText');
    const $albinoB = $('#albinoButton');
    const $albinoT = $('#albinoText');
    const $cynateB = $('#cynateButton');
    const $cynateT = $('#cynateText');
    const $hpB = $('#hpButton');
    const $hpT = $('#hpText');
    const $jdwB = $('#jdwButton');
    const $jdwT = $('#jdwText');
    const $mromyT = $('#mromyText');
    const $mromyB = $('#mromyButton');
    const $ghoulT = $('#ghoulText');
    const $ghoulB = $('#ghoulButton');

    $kssonB.on('click', ()=>{
        let kssonHidden = $kssonT.is(":hidden");
        if(kssonHidden)  {
            $kssonB.removeClass('btn-info');
            $kssonB.addClass('btn-danger');
        }else{
            $kssonB.addClass('btn-info');
            $kssonB.removeClass('btn-danger');
        }
        $kssonT.toggle();
    })

    $byteB.on('click', ()=>{
        let byteHidden = $byteT.is(":hidden");
        if(byteHidden)  {
            $byteB.removeClass('btn-info');
            $byteB.addClass('btn-danger');
        }else{
            $byteB.addClass('btn-info');
            $byteB.removeClass('btn-danger');
        }
        $byteT.toggle();
    })

    $albinoB.on('click', ()=>{
        let albinoHidden = $albinoT.is(":hidden");
        if(albinoHidden)  {
            $albinoB.removeClass('btn-info');
            $albinoB.addClass('btn-danger');
        }else{
            $albinoB.addClass('btn-info');
            $albinoB.removeClass('btn-danger');
        }
        $albinoT.toggle();
    })

    $cynateB.on('click', ()=>{
        let cynateHidden = $cynateT.is(":hidden");
        if(cynateHidden)  {
            $cynateB.removeClass('btn-info');
            $cynateB.addClass('btn-danger');
        }else{
            $cynateB.addClass('btn-info');
            $cynateB.removeClass('btn-danger');
        }
        $cynateT.toggle();
    })

    $hpB.on('click', ()=>{
        let hpHidden = $hpT.is(":hidden");
        if(hpHidden)  {
            $hpB.removeClass('btn-info');
            $hpB.addClass('btn-danger');
        }else{
            $hpB.addClass('btn-info');

            $hpB.removeClass('btn-danger');
        }
        $hpT.toggle();

    })

    $jdwB.on('click', ()=>{
        let jdwHidden = $jdwT.is(":hidden");
        if(jdwHidden)  {
            $jdwB.removeClass('btn-info');
            $jdwB.addClass('btn-danger');
        }else{
            $jdwB.addClass('btn-info');
            $jdwB.removeClass('btn-danger');
        }
        $jdwT.toggle();
    })

    $mromyB.on('click', ()=>{
        let mromyHidden = $mromyT.is(":hidden");
        if(mromyHidden)  {
            $mromyB.removeClass('btn-info');
            $mromyB.addClass('btn-danger');
        }else{
            $mromyB.addClass('btn-info');
            $mromyB.removeClass('btn-danger');
        }
        $mromyT.toggle();
    })

    $ghoulB.on('click', ()=>{
        let ghoulHidden = $ghoulT.is(":hidden");
        if(ghoulHidden)  {
            $ghoulB.removeClass('btn-info');
            $ghoulB.addClass('btn-danger');
        }else{
            $ghoulB.addClass('btn-info');
            $ghoulB.removeClass('btn-danger');
        }
        $ghoulT.toggle();
    })
});
