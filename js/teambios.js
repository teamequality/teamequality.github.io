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
    const $kubaT = $('#kubaText');
    const $kubaB = $('#kubaButton');
    const $rijynT = $('#RijynText');
    const $rijynB = $('#RijynButton');
    const $spiderT = $('#spiderText');
    const $spiderB = $('#spiderButton');
    const $theoT = $('#theoText');
    const $theoB = $('#theoButton');
    const $keeT = $('#keeText');
    const $keeB = $('#keeButton');
    const $devonT = $('#devonText');
    const $devonB = $('#devonButton');
    const $yeloT = $('#yeloText');
    const $yeloB = $('#yeloButton');

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
    });

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
    });

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
    });

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
    });

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

    });

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
    });

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
    });

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
    });

    $kubaB.on('click', ()=>{
        let kubaHidden = $kubaT.is(":hidden");
        if(kubaHidden)  {
            $kubaB.removeClass('btn-info');
            $kubaB.addClass('btn-danger');
        }else{
            $kubaB.addClass('btn-info');
            $kubaB.removeClass('btn-danger');
        }
        $kubaT.toggle();
    });

    $rijynB.on('click', ()=>{
        let rijynHidden = $rijynT.is(":hidden");
        if(rijynHidden)  {
            $rijynB.removeClass('btn-info');
            $rijynB.addClass('btn-danger');
        }else{
            $rijynB.addClass('btn-info');
            $rijynB.removeClass('btn-danger');
        }
        $rijynT.toggle();
    });

    $spiderB.on('click', ()=>{
        let spiderHidden = $spiderT.is(":hidden");
        if(spiderHidden)  {
            $spiderB.removeClass('btn-info');
            $spiderB.addClass('btn-danger');
        }else{
            $spiderB.addClass('btn-info');
            $spiderB.removeClass('btn-danger');
        }
        $spiderT.toggle();
    });

    $theoB.on('click', ()=>{
        let theoHidden = $theoT.is(":hidden");
        if(theoHidden)  {
            $theoB.removeClass('btn-info');
            $theoB.addClass('btn-danger');
        }else{
            $theoB.addClass('btn-info');
            $theoB.removeClass('btn-danger');
        }
        $theoT.toggle();
    });


    $yeloB.on('click', ()=>{
        let yeloHidden = $yeloT.is(":hidden");
        if(yeloHidden)  {
            $yeloB.removeClass('btn-info');
            $yeloB.addClass('btn-danger');
        }else{
            $yeloB.addClass('btn-info');
            $yeloB.removeClass('btn-danger');
        }
        $yeloT.toggle();
    });

    $devonB.on('click', ()=>{
        let devonHidden = $devonT.is(":hidden");
        if(devonHidden)  {
            $devonB.removeClass('btn-info');
            $devonB.addClass('btn-danger');
        }else{
            $devonB.addClass('btn-info');
            $devonB.removeClass('btn-danger');
        }
        $devonT.toggle();
    });

    $('#EU').on("click", ()=>{
        $('#EUteam').show();
        $('#NAteam').hide();
    });

    $('#NA').on("click", ()=>{
        $('#NAteam').show();
        $('#EUteam').hide();
    });
});
