// Emoji art supplied by Emoji One : http://emojione.com

// Emoji Version: 1.5.2

var imgcdn = "https://cdnjs.cloudflare.com/ajax/libs/emojione/1.5.2/assets/png/"
var imgs = [
"0023-20E3.png",
"0030-20E3.png",
"0031-20E3.png",
"0032-20E3.png",
"0033-20E3.png",
"0034-20E3.png",
"0035-20E3.png",
"0036-20E3.png",
"0037-20E3.png",
"0038-20E3.png",
"0039-20E3.png",
"00A9.png",
"00AE.png",
"1F004.png",
"1F0CF.png",
"1F170.png",
"1F171.png",
"1F17E.png",
"1F17F.png",
"1F18E.png",
"1F191.png",
"1F192.png",
"1F193.png",
"1F194.png",
"1F195.png",
"1F196.png",
"1F197.png",
"1F198.png",
"1F199.png",
"1F19A.png",
"1F201.png",
"1F202.png",
"1F21A.png",
"1F22F.png",
"1F232.png",
"1F233.png",
"1F234.png",
"1F235.png",
"1F236.png",
"1F237.png",
"1F238.png",
"1F239.png",
"1F23A.png",
"1F250.png",
"1F251.png",
"1F300.png",
"1F301.png",
"1F302.png",
"1F303.png",
"1F304.png",
"1F305.png",
"1F306.png",
"1F307.png",
"1F308.png",
"1F309.png",
"1F30A.png",
"1F30B.png",
"1F30C.png",
"1F30D.png",
"1F30E.png",
"1F30F.png",
"1F310.png",
"1F311.png",
"1F312.png",
"1F313.png",
"1F314.png",
"1F315.png",
"1F316.png",
"1F317.png",
"1F318.png",
"1F319.png",
"1F31A.png",
"1F31B.png",
"1F31C.png",
"1F31D.png",
"1F31E.png",
"1F31F.png",
"1F320.png",
"1F321.png",
"1F327.png",
"1F328.png",
"1F329.png",
"1F32A.png",
"1F32B.png",
"1F32C.png",
"1F330.png",
"1F331.png",
"1F332.png",
"1F333.png",
"1F334.png",
"1F335.png",
"1F336.png",
"1F337.png",
"1F338.png",
"1F339.png",
"1F33A.png",
"1F33B.png",
"1F33C.png",
"1F33D.png",
"1F33E.png",
"1F33F.png",
"1F340.png",
"1F341.png",
"1F342.png",
"1F343.png",
"1F344.png",
"1F345.png",
"1F346.png",
"1F347.png",
"1F348.png",
"1F349.png",
"1F34A.png",
"1F34B.png",
"1F34C.png",
"1F34D.png",
"1F34E.png",
"1F34F.png",
"1F350.png",
"1F351.png",
"1F352.png",
"1F353.png",
"1F354.png",
"1F355.png",
"1F356.png",
"1F357.png",
"1F358.png",
"1F359.png",
"1F35A.png",
"1F35B.png",
"1F35C.png",
"1F35D.png",
"1F35E.png",
"1F35F.png",
"1F360.png",
"1F361.png",
"1F362.png",
"1F363.png",
"1F364.png",
"1F365.png",
"1F366.png",
"1F367.png",
"1F368.png",
"1F369.png",
"1F36A.png",
"1F36B.png",
"1F36C.png",
"1F36D.png",
"1F36E.png",
"1F36F.png",
"1F370.png",
"1F371.png",
"1F372.png",
"1F373.png",
"1F374.png",
"1F375.png",
"1F376.png",
"1F377.png",
"1F378.png",
"1F379.png",
"1F37A.png",
"1F37B.png",
"1F37C.png",
"1F37D.png",
"1F380.png",
"1F381.png",
"1F382.png",
"1F383.png",
"1F384.png",
"1F385.png",
"1F386.png",
"1F387.png",
"1F388.png",
"1F389.png",
"1F38A.png",
"1F38B.png",
"1F38C.png",
"1F38D.png",
"1F38E.png",
"1F38F.png",
"1F390.png",
"1F391.png",
"1F392.png",
"1F393.png",
"1F394.png",
"1F395.png",
"1F396.png",
"1F397.png",
"1F398.png",
"1F399.png",
"1F39A.png",
"1F39B.png",
"1F39C.png",
"1F39D.png",
"1F39E.png",
"1F39F.png",
"1F3A0.png",
"1F3A1.png",
"1F3A2.png",
"1F3A3.png",
"1F3A4.png",
"1F3A5.png",
"1F3A6.png",
"1F3A7.png",
"1F3A8.png",
"1F3A9.png",
"1F3AA.png",
"1F3AB.png",
"1F3AC.png",
"1F3AD.png",
"1F3AE.png",
"1F3AF.png",
"1F3B0.png",
"1F3B1.png",
"1F3B2.png",
"1F3B3.png",
"1F3B4.png",
"1F3B5.png",
"1F3B6.png",
"1F3B7.png",
"1F3B8.png",
"1F3B9.png",
"1F3BA.png",
"1F3BB.png",
"1F3BC.png",
"1F3BD.png",
"1F3BE.png",
"1F3BF.png",
"1F3C0.png",
"1F3C1.png",
"1F3C2.png",
"1F3C3.png",
"1F3C4.png",
"1F3C5.png",
"1F3C6.png",
"1F3C7.png",
"1F3C8.png",
"1F3C9.png",
"1F3CA.png",
"1F3CB.png",
"1F3CC.png",
"1F3CD.png",
"1F3CE.png",
"1F3D4.png",
"1F3D5.png",
"1F3D6.png",
"1F3D7.png",
"1F3D8.png",
"1F3D9.png",
"1F3DA.png",
"1F3DB.png",
"1F3DC.png",
"1F3DD.png",
"1F3DE.png",
"1F3DF.png",
"1F3E0.png",
"1F3E1.png",
"1F3E2.png",
"1F3E3.png",
"1F3E4.png",
"1F3E5.png",
"1F3E6.png",
"1F3E7.png",
"1F3E8.png",
"1F3E9.png",
"1F3EA.png",
"1F3EB.png",
"1F3EC.png",
"1F3ED.png",
"1F3EE.png",
"1F3EF.png",
"1F3F0.png",
"1F3F1.png",
"1F3F2.png",
"1F3F3.png",
"1F3F4.png",
"1F3F5.png",
"1F3F6.png",
"1F3F7.png",
"1F400.png",
"1F401.png",
"1F402.png",
"1F403.png",
"1F404.png",
"1F405.png",
"1F406.png",
"1F407.png",
"1F408.png",
"1F409.png",
"1F40A.png",
"1F40B.png",
"1F40C.png",
"1F40D.png",
"1F40E.png",
"1F40F.png",
"1F410.png",
"1F411.png",
"1F412.png",
"1F413.png",
"1F414.png",
"1F415.png",
"1F416.png",
"1F417.png",
"1F418.png",
"1F419.png",
"1F41A.png",
"1F41B.png",
"1F41C.png",
"1F41D.png",
"1F41E.png",
"1F41F.png",
"1F420.png",
"1F421.png",
"1F422.png",
"1F423.png",
"1F424.png",
"1F425.png",
"1F426.png",
"1F427.png",
"1F428.png",
"1F429.png",
"1F42A.png",
"1F42B.png",
"1F42C.png",
"1F42D.png",
"1F42E.png",
"1F42F.png",
"1F430.png",
"1F431.png",
"1F432.png",
"1F433.png",
"1F434.png",
"1F435.png",
"1F436.png",
"1F437.png",
"1F438.png",
"1F439.png",
"1F43A.png",
"1F43B.png",
"1F43C.png",
"1F43D.png",
"1F43E.png",
"1F43F.png",
"1F440.png",
"1F441.png",
"1F442.png",
"1F443.png",
"1F444.png",
"1F445.png",
"1F446.png",
"1F447.png",
"1F448.png",
"1F449.png",
"1F44A.png",
"1F44B.png",
"1F44C.png",
"1F44D.png",
"1F44E.png",
"1F44F.png",
"1F450.png",
"1F451.png",
"1F452.png",
"1F453.png",
"1F454.png",
"1F455.png",
"1F456.png",
"1F457.png",
"1F458.png",
"1F459.png",
"1F45A.png",
"1F45B.png",
"1F45C.png",
"1F45D.png",
"1F45E.png",
"1F45F.png",
"1F460.png",
"1F461.png",
"1F462.png",
"1F463.png",
"1F464.png",
"1F465.png",
"1F466.png",
"1F467.png",
"1F468-1F468-1F466-1F466.png",
"1F468-1F468-1F466.png",
"1F468-1F468-1F467-1F466.png",
"1F468-1F468-1F467-1F467.png",
"1F468-1F468-1F467.png",
"1F468-1F469-1F466-1F466.png",
"1F468-1F469-1F467-1F466.png",
"1F468-1F469-1F467-1F467.png",
"1F468-1F469-1F467.png",
"1F468-2764-1F468.png",
"1F468-2764-1F48B-1F468.png",
"1F468.png",
"1F469-1F469-1F466-1F466.png",
"1F469-1F469-1F466.png",
"1F469-1F469-1F467-1F466.png",
"1F469-1F469-1F467-1F467.png",
"1F469-1F469-1F467.png",
"1F469-2764-1F469.png",
"1F469-2764-1F48B-1F469.png",
"1F469.png",
"1F46A.png",
"1F46B.png",
"1F46C.png",
"1F46D.png",
"1F46E.png",
"1F46F.png",
"1F470.png",
"1F471.png",
"1F472.png",
"1F473.png",
"1F474.png",
"1F475.png",
"1F476.png",
"1F477.png",
"1F478.png",
"1F479.png",
"1F47A.png",
"1F47B.png",
"1F47C.png",
"1F47D.png",
"1F47E.png",
"1F47F.png",
"1F480.png",
"1F481.png",
"1F482.png",
"1F483.png",
"1F484.png",
"1F485.png",
"1F486.png",
"1F487.png",
"1F488.png",
"1F489.png",
"1F48A.png",
"1F48B.png",
"1F48C.png",
"1F48D.png",
"1F48E.png",
"1F48F.png",
"1F490.png",
"1F491.png",
"1F492.png",
"1F493.png",
"1F494.png",
"1F495.png",
"1F496.png",
"1F497.png",
"1F498.png",
"1F499.png",
"1F49A.png",
"1F49B.png",
"1F49C.png",
"1F49D.png",
"1F49E.png",
"1F49F.png",
"1F4A0.png",
"1F4A1.png",
"1F4A2.png",
"1F4A3.png",
"1F4A4.png",
"1F4A5.png",
"1F4A6.png",
"1F4A7.png",
"1F4A8.png",
"1F4A9.png",
"1F4AA.png",
"1F4AB.png",
"1F4AC.png",
"1F4AD.png",
"1F4AE.png",
"1F4AF.png",
"1F4B0.png",
"1F4B1.png",
"1F4B2.png",
"1F4B3.png",
"1F4B4.png",
"1F4B5.png",
"1F4B6.png",
"1F4B7.png",
"1F4B8.png",
"1F4B9.png",
"1F4BA.png",
"1F4BB.png",
"1F4BC.png",
"1F4BD.png",
"1F4BE.png",
"1F4BF.png",
"1F4C0.png",
"1F4C1.png",
"1F4C2.png",
"1F4C3.png",
"1F4C4.png",
"1F4C5.png",
"1F4C6.png",
"1F4C7.png",
"1F4C8.png",
"1F4C9.png",
"1F4CA.png",
"1F4CB.png",
"1F4CC.png",
"1F4CD.png",
"1F4CE.png",
"1F4CF.png",
"1F4D0.png",
"1F4D1.png",
"1F4D2.png",
"1F4D3.png",
"1F4D4.png",
"1F4D5.png",
"1F4D6.png",
"1F4D7.png",
"1F4D8.png",
"1F4D9.png",
"1F4DA.png",
"1F4DB.png",
"1F4DC.png",
"1F4DD.png",
"1F4DE.png",
"1F4DF.png",
"1F4E0.png",
"1F4E1.png",
"1F4E2.png",
"1F4E3.png",
"1F4E4.png",
"1F4E5.png",
"1F4E6.png",
"1F4E7.png",
"1F4E8.png",
"1F4E9.png",
"1F4EA.png",
"1F4EB.png",
"1F4EC.png",
"1F4ED.png",
"1F4EE.png",
"1F4EF.png",
"1F4F0.png",
"1F4F1.png",
"1F4F2.png",
"1F4F3.png",
"1F4F4.png",
"1F4F5.png",
"1F4F6.png",
"1F4F7.png",
"1F4F8.png",
"1F4F9.png",
"1F4FA.png",
"1F4FB.png",
"1F4FC.png",
"1F4FD.png",
"1F4FE.png",
"1F500.png",
"1F501.png",
"1F502.png",
"1F503.png",
"1F504.png",
"1F505.png",
"1F506.png",
"1F507.png",
"1F508.png",
"1F509.png",
"1F50A.png",
"1F50B.png",
"1F50C.png",
"1F50D.png",
"1F50E.png",
"1F50F.png",
"1F510.png",
"1F511.png",
"1F512.png",
"1F513.png",
"1F514.png",
"1F515.png",
"1F516.png",
"1F517.png",
"1F518.png",
"1F519.png",
"1F51A.png",
"1F51B.png",
"1F51C.png",
"1F51D.png",
"1F51E.png",
"1F51F.png",
"1F520.png",
"1F521.png",
"1F522.png",
"1F523.png",
"1F524.png",
"1F525.png",
"1F526.png",
"1F527.png",
"1F528.png",
"1F529.png",
"1F52A.png",
"1F52B.png",
"1F52C.png",
"1F52D.png",
"1F52E.png",
"1F52F.png",
"1F530.png",
"1F531.png",
"1F532.png",
"1F533.png",
"1F534.png",
"1F535.png",
"1F536.png",
"1F537.png",
"1F538.png",
"1F539.png",
"1F53A.png",
"1F53B.png",
"1F53C.png",
"1F53D.png",
"1F546.png",
"1F547.png",
"1F548.png",
"1F549.png",
"1F54A.png",
"1F550.png",
"1F551.png",
"1F552.png",
"1F553.png",
"1F554.png",
"1F555.png",
"1F556.png",
"1F557.png",
"1F558.png",
"1F559.png",
"1F55A.png",
"1F55B.png",
"1F55C.png",
"1F55D.png",
"1F55E.png",
"1F55F.png",
"1F560.png",
"1F561.png",
"1F562.png",
"1F563.png",
"1F564.png",
"1F565.png",
"1F566.png",
"1F567.png",
"1F568.png",
"1F569.png",
"1F56A.png",
"1F56B.png",
"1F56C.png",
"1F56D.png",
"1F56E.png",
"1F56F.png",
"1F570.png",
"1F571.png",
"1F572.png",
"1F573.png",
"1F574.png",
"1F575.png",
"1F576.png",
"1F577.png",
"1F578.png",
"1F579.png",
"1F57B.png",
"1F57E.png",
"1F57F.png",
"1F581.png",
"1F582.png",
"1F583.png",
"1F585.png",
"1F586.png",
"1F587.png",
"1F588.png",
"1F589.png",
"1F58A.png",
"1F58B.png",
"1F58C.png",
"1F58D.png",
"1F58E.png",
"1F58F.png",
"1F590.png",
"1F591.png",
"1F592.png",
"1F593.png",
"1F594.png",
"1F595.png",
"1F596.png",
"1F597.png",
"1F598.png",
"1F599.png",
"1F59E.png",
"1F59F.png",
"1F5A5.png",
"1F5A6.png",
"1F5A7.png",
"1F5A8.png",
"1F5A9.png",
"1F5AA.png",
"1F5AB.png",
"1F5AD.png",
"1F5AE.png",
"1F5AF.png",
"1F5B2.png",
"1F5B3.png",
"1F5B4.png",
"1F5B8.png",
"1F5B9.png",
"1F5BC.png",
"1F5BD.png",
"1F5BE.png",
"1F5C0.png",
"1F5C1.png",
"1F5C2.png",
"1F5C3.png",
"1F5C4.png",
"1F5C6.png",
"1F5C7.png",
"1F5C9.png",
"1F5CA.png",
"1F5CE.png",
"1F5CF.png",
"1F5D0.png",
"1F5D1.png",
"1F5D2.png",
"1F5D3.png",
"1F5D4.png",
"1F5D8.png",
"1F5D9.png",
"1F5DC.png",
"1F5DD.png",
"1F5DE.png",
"1F5E0.png",
"1F5E1.png",
"1F5E2.png",
"1F5E3.png",
"1F5E8.png",
"1F5E9.png",
"1F5EA.png",
"1F5EB.png",
"1F5EC.png",
"1F5ED.png",
"1F5EE.png",
"1F5EF.png",
"1F5F0.png",
"1F5F1.png",
"1F5F2.png",
"1F5F3.png",
"1F5F4.png",
"1F5F5.png",
"1F5F8.png",
"1F5F9.png",
"1F5FA.png",
"1F5FB.png",
"1F5FC.png",
"1F5FD.png",
"1F5FE.png",
"1F5FF.png",
"1F600.png",
"1F601.png",
"1F602.png",
"1F603.png",
"1F604.png",
"1F605.png",
"1F606.png",
"1F607.png",
"1F608.png",
"1F609.png",
"1F60A.png",
"1F60B.png",
"1F60C.png",
"1F60D.png",
"1F60E.png",
"1F60F.png",
"1F610.png",
"1F611.png",
"1F612.png",
"1F613.png",
"1F614.png",
"1F615.png",
"1F616.png",
"1F617.png",
"1F618.png",
"1F619.png",
"1F61A.png",
"1F61B.png",
"1F61C.png",
"1F61D.png",
"1F61E.png",
"1F61F.png",
"1F620.png",
"1F621.png",
"1F622.png",
"1F623.png",
"1F624.png",
"1F625.png",
"1F626.png",
"1F627.png",
"1F628.png",
"1F629.png",
"1F62A.png",
"1F62B.png",
"1F62C.png",
"1F62D.png",
"1F62E.png",
"1F62F.png",
"1F630.png",
"1F631.png",
"1F632.png",
"1F633.png",
"1F634.png",
"1F635.png",
"1F636.png",
"1F637.png",
"1F638.png",
"1F639.png",
"1F63A.png",
"1F63B.png",
"1F63C.png",
"1F63D.png",
"1F63E.png",
"1F63F.png",
"1F640.png",
"1F641.png",
"1F642.png",
"1F645.png",
"1F646.png",
"1F647.png",
"1F648.png",
"1F649.png",
"1F64A.png",
"1F64B.png",
"1F64C.png",
"1F64D.png",
"1F64E.png",
"1F64F.png",
"1F680.png",
"1F681.png",
"1F682.png",
"1F683.png",
"1F684.png",
"1F685.png",
"1F686.png",
"1F687.png",
"1F688.png",
"1F689.png",
"1F68A.png",
"1F68B.png",
"1F68C.png",
"1F68D.png",
"1F68E.png",
"1F68F.png",
"1F690.png",
"1F691.png",
"1F692.png",
"1F693.png",
"1F694.png",
"1F695.png",
"1F696.png",
"1F697.png",
"1F698.png",
"1F699.png",
"1F69A.png",
"1F69B.png",
"1F69C.png",
"1F69D.png",
"1F69E.png",
"1F69F.png",
"1F6A0.png",
"1F6A1.png",
"1F6A2.png",
"1F6A3.png",
"1F6A4.png",
"1F6A5.png",
"1F6A6.png",
"1F6A7.png",
"1F6A8.png",
"1F6A9.png",
"1F6AA.png",
"1F6AB.png",
"1F6AC.png",
"1F6AD.png",
"1F6AE.png",
"1F6AF.png",
"1F6B0.png",
"1F6B1.png",
"1F6B2.png",
"1F6B3.png",
"1F6B4.png",
"1F6B5.png",
"1F6B6.png",
"1F6B7.png",
"1F6B8.png",
"1F6B9.png",
"1F6BA.png",
"1F6BB.png",
"1F6BC.png",
"1F6BD.png",
"1F6BE.png",
"1F6BF.png",
"1F6C0.png",
"1F6C1.png",
"1F6C2.png",
"1F6C3.png",
"1F6C4.png",
"1F6C5.png",
"1F6C6.png",
"1F6C7.png",
"1F6C8.png",
"1F6C9.png",
"1F6CA.png",
"1F6CB.png",
"1F6CC.png",
"1F6CD.png",
"1F6CE.png",
"1F6CF.png",
"1F6E0.png",
"1F6E1.png",
"1F6E2.png",
"1F6E3.png",
"1F6E4.png",
"1F6E5.png",
"1F6E6.png",
"1F6E7.png",
"1F6E8.png",
"1F6E9.png",
"1F6EA.png",
"1F6EB.png",
"1F6EC.png",
"1F6F0.png",
"1F6F1.png",
"1F6F2.png",
"1F6F3.png",
"203C.png",
"2049.png",
"2122.png",
"2139.png",
"2194.png",
"2195.png",
"2196.png",
"2197.png",
"2198.png",
"2199.png",
"21A9.png",
"21AA.png",
"231A.png",
"231B.png",
"23E9.png",
"23EA.png",
"23EB.png",
"23EC.png",
"23F0.png",
"23F3.png",
"24C2.png",
"25AA.png",
"25AB.png",
"25B6.png",
"25C0.png",
"25FB.png",
"25FC.png",
"25FD.png",
"25FE.png",
"2600.png",
"2601.png",
"260E.png",
"2611.png",
"2614.png",
"2615.png",
"261D.png",
"263A.png",
"2648.png",
"2649.png",
"264A.png",
"264B.png",
"264C.png",
"264D.png",
"264E.png",
"264F.png",
"2650.png",
"2651.png",
"2652.png",
"2653.png",
"2660.png",
"2663.png",
"2665.png",
"2666.png",
"2668.png",
"267B.png",
"267F.png",
"2693.png",
"26A0.png",
"26A1.png",
"26AA.png",
"26AB.png",
"26BD.png",
"26BE.png",
"26C4.png",
"26C5.png",
"26CE.png",
"26D4.png",
"26EA.png",
"26F2.png",
"26F3.png",
"26F5.png",
"26FA.png",
"26FD.png",
"2702.png",
"2705.png",
"2708.png",
"2709.png",
"270A.png",
"270B.png",
"270C.png",
"270F.png",
"2712.png",
"2714.png",
"2716.png",
"2728.png",
"2733.png",
"2734.png",
"2744.png",
"2747.png",
"274C.png",
"274E.png",
"2753.png",
"2754.png",
"2755.png",
"2757.png",
"2764.png",
"2795.png",
"2796.png",
"2797.png",
"27A1.png",
"27B0.png",
"27BF.png",
"2934.png",
"2935.png",
"2B05.png",
"2B06.png",
"2B07.png",
"2B1B.png",
"2B1C.png",
"2B50.png",
"2B55.png",
"3030.png",
"303D.png",
"3297.png",
"3299.png",
];
