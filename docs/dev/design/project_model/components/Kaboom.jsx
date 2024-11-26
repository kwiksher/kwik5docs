/* -------------------------------------------------------------------
    KABOOM PARTICLES EDITOR
    1.0 (6/6/14) - reads PD2 json file, converts to XML, updates values, converts to json and save


    --------------------------------------------------------------------*/
$.kwik.kaboom = true;
var myParticles = "";
var kaboom_version = "1.0.2"
var solar2d = require("publishRenders/solar2d")

/*
$.kwik.projectFolder = "/Users/asouza/Downloads/";
$.kwik.pluginFolder = "/Users/asouza/Downloads/";
var fil = $.kwik.pluginFolder+"kaboom.json"
editParticles(fil,500,300)
*/

var partPath = "";
var partImgPath = "";
var save = false;

function createImage(file){
    LOG_INFO($.stack, $.fileName, $.line);
    var myImageFile = new File(file);
    if(myImageFile.exists ==false|| myImageFile.constructor != File)  {
          var binS = new String("\u00FF\u00D8\u00FF\u00E0\x00\x10JFIF\x00\x01\x01\x01\x00`\x00`\x00\x00\u00FF\u00E1\x00\x16Exif\x00\x00II*\x00\b\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00DB\x00C\x00\b\x06\x06\x07\x06\x05\b\x07\x07\x07\t\t\b\n\f\x14\r\f\x0B\x0B\f\x19\x12\x13\x0F\x14\x1D\x1A\x1F\x1E\x1D\x1A\x1C\x1C $.' \",#\x1C\x1C(7),01444\x1F'9=82<.342\u00FF\u00DB\x00C\x01\t\t\t\f\x0B\f\x18\r\r\x182!\x1C!22222222222222222222222222222222222222222222222222\u00FF\u00C0\x00\x11\b\x00\x14\x00d\x03\x01\"\x00\x02\x11\x01\x03\x11\x01\u00FF\u00C4\x00\x1F\x00\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\u00FF\u00C4\x00\u00B5\x10\x00\x02\x01\x03\x03\x02\x04\x03\x05\x05\x04\x04\x00\x00\x01}\x01\x02\x03\x00\x04\x11\x05\x12!1A\x06\x13Qa\x07\"q\x142\u0081\u0091\u00A1\b#B\u00B1\u00C1\x15R\u00D1\u00F0$3br\u0082\t\n\x16\x17\x18\x19\x1A%&'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz\u0083\u0084\u0085\u0086\u0087\u0088\u0089\u008A\u0092\u0093\u0094\u0095\u0096\u0097\u0098\u0099\u009A\u00A2\u00A3\u00A4\u00A5\u00A6\u00A7\u00A8\u00A9\u00AA\u00B2\u00B3\u00B4\u00B5\u00B6\u00B7\u00B8\u00B9\u00BA\u00C2\u00C3\u00C4\u00C5\u00C6\u00C7\u00C8\u00C9\u00CA\u00D2\u00D3\u00D4\u00D5\u00D6\u00D7\u00D8\u00D9\u00DA\u00E1\u00E2\u00E3\u00E4\u00E5\u00E6\u00E7\u00E8\u00E9\u00EA\u00F1\u00F2\u00F3\u00F4\u00F5\u00F6\u00F7\u00F8\u00F9\u00FA\u00FF\u00C4\x00\x1F\x01\x00\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\u00FF\u00C4\x00\u00B5\x11\x00\x02\x01\x02\x04\x04\x03\x04\x07\x05\x04\x04\x00\x01\x02w\x00\x01\x02\x03\x11\x04\x05!1\x06\x12AQ\x07aq\x13\"2\u0081\b\x14B\u0091\u00A1\u00B1\u00C1\t#3R\u00F0\x15br\u00D1\n\x16$4\u00E1%\u00F1\x17\x18\x19\x1A&'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz\u0082\u0083\u0084\u0085\u0086\u0087\u0088\u0089\u008A\u0092\u0093\u0094\u0095\u0096\u0097\u0098\u0099\u009A\u00A2\u00A3\u00A4\u00A5\u00A6\u00A7\u00A8\u00A9\u00AA\u00B2\u00B3\u00B4\u00B5\u00B6\u00B7\u00B8\u00B9\u00BA\u00C2\u00C3\u00C4\u00C5\u00C6\u00C7\u00C8\u00C9\u00CA\u00D2\u00D3\u00D4\u00D5\u00D6\u00D7\u00D8\u00D9\u00DA\u00E2\u00E3\u00E4\u00E5\u00E6\u00E7\u00E8\u00E9\u00EA\u00F2\u00F3\u00F4\u00F5\u00F6\u00F7\u00F8\u00F9\u00FA\u00FF\u00DA\x00\f\x03\x01\x00\x02\x11\x03\x11\x00?\x00\u00D7\u00A2\u008A+\u00F33\u00F4 \u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x00\u00A2\u008A(\x03\u00FF\u00D9");
          myImageFile.open("w");
          myImageFile.encoding = "BINARY";
          myImageFile.write(binS);
          myImageFile.close();
     }
}

//color a button but it is not working with an image above
function customDraw(){
    LOG_INFO($.stack, $.fileName, $.line);

    with( this ) {
        graphics.drawOSControl();
        graphics.rectPath(0,0,size[0],size[1]);
        graphics.fillPath(fillBrush);
        if( text ) graphics.drawString(text,textPen,(size[0]-graphics.measureString (text,graphics.font,size[0])[0])/2,3,graphics.font);
    }

}

/*
    button01:IconButton{bounds:[60,120,120,150] , text:'tab 2' },\
            button02:IconButton{bounds:[120,120,180,150] , text:'tab 3' },\
            button03:IconButton{bounds:[180,120,240,150] , text:'tab 4' },\
            */

exports.editParticles = function (fileNew, w, h) {
    LOG_INFO($.stack, $.fileName, $.line);
    //check for file, otherwise create a new one from sample
    //draw screen
    var z = "dialog { alignChildren: 'right', orientation:'column', text: 'Kaboom', \
        partName: Group {orientation: 'row', alignment:'left',  \
                    s: StaticText {text: '"+_Name_ +"'}, \
                    e: EditText {characters: 23}, \
                    s:StaticText { text:'                          ' },\
                    preview: Group {orientation: 'row', alignment:'right',  \
                        b: Button {text:'LIVE PREVIEW', }, \
                    }, \
        }, \
        tab: Group {orientation: 'row', alignment:'center',  \
            button01:IconButton{ },\
            button02:IconButton{},\
            button03:IconButton{},\
            button04:IconButton{},\
        },\
        tabs: Group {orientation: 'stack', alignment:'left', justify:'left',  \
            common:Panel{orientation: 'row', alignChildren: 'top', text:'Default Settings' ,properties:{borderStyle:'etched',su1PanelCoordinates:true},\
                image: Group {orientation: 'column', alignment:'left', justify:'left',  \
                    IconButton1: IconButton {properties:{style:'button'}}, \
                    s:StaticText { text:'' },\
                    pColor: Group {orientation: 'row', alignment:'left',  \
                            s:StaticText { text:'" + _Start_Color_+"', alignment:'left', justify:'left', },\
                            rgbPicker:	Group {	 },\
                            alphaPicker:	Group {	 },\
                    }, \
                    s1:StaticText { text:'"+_Alpha_+"', alignment:'left', justify:'left', },\
                    ss1: Slider{minvalue:0,maxvalue:1, value:0.50}, \
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                }\
                data: Group {orientation: 'column', alignment:'right',  \
                    s2:StaticText { text:'' },\
                    color: IconButton {properties:{style:'button'}}, \
                    s1:StaticText { text:'' },\
                    e1:EditText{text:'0.50', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                },\
                divider: Panel {},\
                entry: Group {orientation: 'column', alignment:'left', alignChildren: 'left',  \
                    s:StaticText { text:'"+_Duration_+"' },\
                    s1:StaticText { text:'"+_Source_Position_Variance_X_+"' },\
                    ss1: Slider{minvalue:0,maxvalue:2048, value:0}, \
                    cx:Checkbox { text:'"+_Use_replacement_width_+"', value:0, alignment: 'right' },\
                    s2:StaticText { text:'Source Position Variance Y:' },\
                    ss2: Slider{minvalue:0,maxvalue:2048, value:0}, \
                    cy:Checkbox { text:'"+_Use_replacement_height_ + "', value:0, alignment: 'right' },\
                    s3:StaticText { text:'"+_Maximum_Particles_+"' },\
                    ss3: Slider{minvalue:0,maxvalue:2000, value:0}, \
                    s4:StaticText { text:'"+_Emit_Angle_+"' },\
                    ss4: Slider{minvalue:0,maxvalue:360, value:90.00}, \
                    s5:StaticText { text:'"+_Emit_Angle_Variance_+"' },\
                    ss5: Slider{minvalue:0,maxvalue:360, value:0.00}, \
                },\
                value: Group {orientation: 'column', alignment:'right',  \
                    e:EditText{text:'-1', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e1:EditText{text:'7', characters:7, justify:'right' },\
                    s1:StaticText { text:'' },\
                    s1:StaticText { text:'' },\
                    e2:EditText{text:'7', characters:7, justify:'right' },\
                    s2:StaticText { text:'' },\
                    s1:StaticText { text:'' },\
                    e3:EditText{text:'77', characters:7, justify:'right' },\
                    s3:StaticText { text:'' },\
                    e4:EditText{text:'90', characters:7, justify:'right' },\
                    s4:StaticText { text:'' },\
                    e5:EditText{text:'10', characters:7, justify:'right' },\
                },\
            },\
            emitter: Panel{orientation: 'row', alignChildren: 'top', text:'"+_Emitter_Settings_+"' ,properties:{borderStyle:'etched',su1PanelCoordinates:true},\
                entry: Group {orientation: 'column', alignment:'left', alignChildren: 'left',  \
                    pType: Group {orientation: 'row', alignment:'left',  \
                            s:StaticText { text:'"+_Type_+"', alignment:'left', justify:'left', },\
                            mode:DropDownList {alignment: 'left'},\
                    }, \
                    ppType: Group {orientation: 'stack', alignment:'left', justify:'left',  \
                        gravity: Group {orientation: 'column', alignment:'left', justify:'left',  \
                            s:StaticText { text:'' },\
                            s:StaticText { text:'"+_Speed_+"', alignment:'left', justify:'left', },\
                            ss0: Slider{minvalue:0.00,maxvalue:2000.00, value:225.00}, \
                            s1:StaticText { text:'"+_Speed_Variance_+"', alignment:'left', justify:'left', },\
                            ss1: Slider{minvalue:0.00,maxvalue:2000.00, value:30.00}, \
                            s1:StaticText { text:'"+_X_Gravity_+"', alignment:'left', justify:'left', },\
                            ss2: Slider{minvalue:-2000,maxvalue:2000.00, value:0.00}, \
                            s1:StaticText { text:'"+_Y_Gravity_+"', alignment:'left', justify:'left', },\
                            ss3: Slider{minvalue:-2000,maxvalue:2000.00, value:0.00}, \
                            s1:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                        },\
                        radial: Group {orientation: 'column', alignment:'left', justify:'left',  \
                            s:StaticText { text:'' },\
                            s:StaticText { text:'"+_Maximum_Radius_+"', alignment:'left', justify:'left', },\
                            ss0: Slider{minvalue:0.00,maxvalue:1000.00, value:0.00}, \
                            s1:StaticText { text:'"+_Maximum_Radius_Variance_ +"', alignment:'left', justify:'left', },\
                            ss1: Slider{minvalue:0.00,maxvalue:1000.00, value:0.00}, \
                            s1:StaticText { text:'"+_Minimum_Radius_+"', alignment:'left', justify:'left', },\
                            ss2: Slider{minvalue:0.00,maxvalue:1000.00, value:300.00}, \
                            s1:StaticText { text:'"+_Minimum_Radius_Variance_+"', alignment:'left', justify:'left', },\
                            ss3: Slider{minvalue:00.00,maxvalue:1000.00, value:0.00}, \
                            s1:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                        },\
                    },\
                },\
                value: Group {orientation: 'column', alignment:'right',  \
                    pType: Group {orientation: 'row', alignment:'left',  \
                            s:StaticText { text:'', alignment:'left', justify:'left', },\
                            s:StaticText { text:'', alignment:'left', justify:'left', },\
                    }, \
                    ppType: Group {orientation: 'stack', alignment:'left', justify:'left',  \
                        gravity: Group {orientation: 'column', alignment:'left', justify:'left',  \
                            s:StaticText { text:'' },\
                            s0:StaticText { text:'' },\
                            s0:StaticText { text:'' },\
                            e0:EditText{text:'225.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e1:EditText{text:'30.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e2:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e3:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                           s:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                        },\
                        radial: Group {orientation: 'column', alignment:'left', justify:'left',  \
                            s:StaticText { text:'' },\
                            s0:StaticText { text:'' },\
                            s0:StaticText { text:'' },\
                            e0:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e1:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e2:EditText{text:'300.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e3:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                           s:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                        },\
                    },\
                },\
                divider: Panel {},\
                entry1: Group {orientation: 'column', alignment:'left', alignChildren: 'left',  \
                    pType: Group {orientation: 'row', alignment:'left',  \
                            s:StaticText { text:'', alignment:'left', justify:'left', },\
                            s:StaticText { text:'', alignment:'left', justify:'left', },\
                    }, \
                    ppType: Group {orientation: 'stack', alignment:'left', justify:'left',  \
                        gravity: Group {orientation: 'column', alignment:'left', justify:'left',  \
                            s:StaticText { text:'' },\
                            s:StaticText { text:'"+_Radial_Acceleration_+"', alignment:'left', justify:'left', },\
                            ss0: Slider{minvalue:-2000,maxvalue:2000.00, value:0.00}, \
                            s1:StaticText { text:'"+_Radial_Accel_Variance_+"', alignment:'left', justify:'left', },\
                            ss1: Slider{minvalue:-2000,maxvalue:2000.00, value:0.00}, \
                            s1:StaticText { text:'"+_Tangential_Acceleration_+"', alignment:'left', justify:'left', },\
                            ss2: Slider{minvalue:-2000,maxvalue:2000.00, value:0.00}, \
                            s1:StaticText { text:'"+_Tangential_Accel_Variance_+"', alignment:'left', justify:'left', },\
                            ss3: Slider{minvalue:-2000,maxvalue:2000.00, value:0.00}, \
                            s1:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                        },\
                        radial: Group {orientation: 'column', alignment:'left', justify:'left',  \
                            s:StaticText { text:'' },\
                            s:StaticText { text:'"+_Degrees_Per_Second_+"', alignment:'left', justify:'left', },\
                            ss0: Slider{minvalue:-1000,maxvalue:1000, value:360.00}, \
                            s1:StaticText { text:'"+_DPS_Variance_+"', alignment:'left', justify:'left', },\
                            ss1: Slider{minvalue:-1000,maxvalue:1000, value:0.00}, \
                            s1:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                            s1:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                            s1:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                        },\
                    },\
                },\
                value1: Group {orientation: 'column', alignment:'right',  \
                    pType: Group {orientation: 'row', alignment:'left',  \
                            s:StaticText { text:'', alignment:'left', justify:'left', },\
                            s:StaticText { text:'', alignment:'left', justify:'left', },\
                    }, \
                    ppType: Group {orientation: 'stack', alignment:'left', justify:'left',  \
                        gravity: Group {orientation: 'column', alignment:'left', justify:'left',  \
                            s:StaticText { text:'' },\
                            s0:StaticText { text:'' },\
                            s0:StaticText { text:'' },\
                            e0:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e1:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e2:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e3:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                           s:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                        },\
                        radial: Group {orientation: 'column', alignment:'left', justify:'left',  \
                            s:StaticText { text:'' },\
                            s0:StaticText { text:'' },\
                            s0:StaticText { text:'' },\
                            e0:EditText{text:'360.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            e1:EditText{text:'0.00', characters:7, justify:'right' },\
                            s1:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                            s:StaticText { text:'' },\
                        },\
                    },\
                },\
            },\
            particle: Panel{orientation: 'row', alignChildren: 'top', text:'"+_Particle_Settings_+"' ,properties:{borderStyle:'etched',su1PanelCoordinates:true},\
                entry: Group {orientation: 'column', alignment:'left', alignChildren: 'left',  \
                    s:StaticText { text:'"+_Lifespan_+"' },\
                    ss0: Slider{minvalue:0.05,maxvalue:10, value:1.00}, \
                    s1:StaticText { text:'"+_Lifespan_Variance_+"' },\
                    ss1: Slider{minvalue:0,maxvalue:10, value:0.00}, \
                    s2:StaticText { text:'"+_Start_Size_+"' },\
                    ss2: Slider{minvalue:0,maxvalue:512, value:64.00}, \
                    s3:StaticText { text:'"+_Start_Size_Variance_+"' },\
                    ss3: Slider{minvalue:0,maxvalue:512, value:5.00}, \
                    s4:StaticText { text:'"+_End_Size_+"' },\
                    ss4: Slider{minvalue:0,maxvalue:512, value:0.00}, \
                    s5:StaticText { text:'"+_End_Size_Variance_+"' },\
                    ss5: Slider{minvalue:0,maxvalue:512, value:0.00}, \
                    s5:StaticText { text:'' },\
                },\
                value: Group {orientation: 'column', alignment:'right',  \
                    s:StaticText { text:'' },\
                    e0:EditText{text:'1.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e1:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e2:EditText{text:'64.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e3:EditText{text:'5.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e4:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e5:EditText{text:'0.00', characters:7, justify:'right' },\
                    s5:StaticText { text:'' },\
                },\
                divider: Panel {},\
                entry2: Group {orientation: 'column', alignment:'left', alignChildren: 'left',  \
                    s:StaticText { text:'"+_Start_Rotation_+"' },\
                    ss0: Slider{minvalue:0,maxvalue:360, value:0.00}, \
                    s1:StaticText { text:'"+_Start_Rotation_Variance_+"' },\
                    ss1: Slider{minvalue:0,maxvalue:360, value:0.00}, \
                    s2:StaticText { text:'"+_End_Rotation_+"' },\
                    ss2: Slider{minvalue:0,maxvalue:7200, value:0.00}, \
                    s3:StaticText { text:'"+_End_Rotation_Variance_+"' },\
                    ss3: Slider{minvalue:0,maxvalue:7200, value:0.00}, \
                    s4:StaticText { text:'' },\
                    s4:StaticText { text:'' },\
                    s4:StaticText { text:'' },\
                    s4:StaticText { text:'' },\
                    s5:StaticText { text:'' },\
                },\
                value2: Group {orientation: 'column', alignment:'right',  \
                    s:StaticText { text:'' },\
                    e0:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e1:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e2:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e3:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    s5:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s5:StaticText { text:'' },\
                    s5:StaticText { text:'' },\
                },\
            }\
            color: Panel{orientation: 'row', alignChildren: 'top', text:'Color Settings' ,properties:{borderStyle:'etched',su1PanelCoordinates:true},\
                entry: Group {orientation: 'column', alignment:'left', alignChildren: 'left',  \
                    s:StaticText { text:'"+_Start_Red_Variance_+"' },\
                    ss0: Slider{minvalue:0.0,maxvalue:1.0, value:0.00}, \
                    s1:StaticText { text:'"+_Start_Green_Variance_+"' },\
                    ss1: Slider{minvalue:0,maxvalue:1.0, value:0.00}, \
                    s2:StaticText { text:'"+_Start_Blue_Variance_+"' },\
                    ss2: Slider{minvalue:0,maxvalue:1.0, value:0.00}, \
                    s3:StaticText { text:'"+_Start_Alpha_Variance_+"' },\
                    ss3: Slider{minvalue:0,maxvalue:1, value:0.00}, \
                    s4:StaticText { text:'"+_Blend_Source_+"' },\
                    ss4:DropDownList {alignment: 'left'},\
                    s5:StaticText { text:'"+_Blend_Destination_+"' },\
                    ss5:DropDownList {alignment: 'left'},\
                    s5:StaticText { text:'' },\
                },\
                value: Group {orientation: 'column', alignment:'right',  \
                    s:StaticText { text:'' },\
                    e0:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e1:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e2:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e3:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    s5:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s5:StaticText { text:'' },\
                    s5:StaticText { text:'' },\
                },\
                divider: Panel {},\
                image: Group {orientation: 'column', alignment:'left', justify:'left',  \
                    pColor: Group {orientation: 'row', alignment:'left',  \
                            s:StaticText { text:'"+_End_Color_+"', alignment:'left', justify:'left', },\
                            rgbPicker:	Group {	 },\
                            alphaPicker:	Group {	 },\
                    }, \
                    s:StaticText { text:'' },\
                    s1:StaticText { text:'"+_End_Alpha_+"', alignment:'left', justify:'left', },\
                    ssa: Slider{minvalue:0,maxvalue:1, value:0.50}, \
                    s:StaticText { text:'"+_End_Red_Variance_+"', alignment:'left', justify:'left', },\
                    ss0: Slider{minvalue:0.0,maxvalue:1.0, value:0.00}, \
                    s1:StaticText { text:'"+_End_Green_Variance_+"', alignment:'left', justify:'left', },\
                    ss1: Slider{minvalue:0,maxvalue:1.0, value:0.00}, \
                    s2:StaticText { text:'"+_End_Blue_Variance_+"', alignment:'left', justify:'left', },\
                    ss2: Slider{minvalue:0,maxvalue:1.0, value:0.00}, \
                    s3:StaticText { text:'"+_End_Alpha_Variance_+"', alignment:'left', justify:'left', },\
                    ss3: Slider{minvalue:0,maxvalue:1, value:0.00}, \
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                }\
                data: Group {orientation: 'column', alignment:'left',  \
                    s2:StaticText { text:'' },\
                    color: IconButton {properties:{style:'button'}}, \
                    s:StaticText { text:'' },\
                    s1:StaticText { text:'' },\
                    ea:EditText{text:'0.50', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e0:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e1:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e2:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    e3:EditText{text:'0.00', characters:7, justify:'right' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                    s:StaticText { text:'' },\
                },\
            }\
        },\
         buttons: Group { orientation: 'row', alignment:'right', \
            hb: Button {text:'Help'},\
            cb: Button {text:'Cancel'},\
            pb: Button {text:'Create'}},\
    }";

    var file = fileNew;
    var ico = null;
    var cname = null;
    if (fileNew == "new") {
        //generates XML from sample file
        file = $.kwik.pluginFolder+"kaboom-sample.json"
        //copy kaboom.png from /$.kwik.pluginFolder into /$.kwik.projectFolder
        var imgFile = File($.kwik.pluginFolder+"kaboom.png");
        imgFile.copy($.kwik.projectFolder+"/temp/kaboom.png");

       ico =  "kaboom.png";
       cname = '"kaboom_'+ kGen.getCounterStr();
     }

    myParticles = "";
    myParticles = new XML(jsonXML(file))

    if (fileNew != "new"){
        ico = String(myParticles.textureFileName)
        //ico = ico.substring(1,ico.length-1)
        ico = ico.replace(/"/gi, "")
        cname = String(myParticles.configName)
        cname = cname.replace(/ /gi, "_")
     }
     cname = cname.substring(1,cname.length-1);
    //convert file
    // alert( jsonXML(file))
    //IMAGE settings
    dlg = new Window (z);

    dlg.text = "Kaboom v"+kaboom_version;
    dlg.partName.preview.b.size = [160,30]

    if (ico !=  "kaboom.png") {
        dlg.partName.e.enabled = false
    }
    dlg.partName.e.text = cname;

    //controls if image was changed
    var oriParticleFile = true;
    var newParticleFile = "";

    //DIVIDERS in each tab
    dlg.tabs.common.divider.bounds = [300,0,300,370];
    dlg.tabs.emitter.divider.bounds = [300,0,300,370];
    dlg.tabs.particle.divider.bounds = [300,0,300,370];
    dlg.tabs.color.divider.bounds = [300,0,300,370];

    dlg.tabs.common.size = [550,400]
    dlg.tabs.particle.size = [550,400]
    dlg.tabs.color.size = [550,400]
    dlg.tabs.emitter.size = [550,400]

    //SLIDER sizes
    dlg.tabs.common.image.ss1.preferredSize = [170, 20];
    dlg.tabs.common.entry.ss1.preferredSize = [160, 20];
    dlg.tabs.common.entry.ss2.preferredSize = [160, 20];
    dlg.tabs.common.entry.ss3.preferredSize = [160, 20];
    dlg.tabs.common.entry.ss4.preferredSize = [160, 20];
    dlg.tabs.common.entry.ss5.preferredSize = [160, 20];

    dlg.tabs.particle.entry.ss0.preferredSize = [170, 20];
    dlg.tabs.particle.entry.ss1.preferredSize = [170, 20];
    dlg.tabs.particle.entry.ss2.preferredSize = [170, 20];
    dlg.tabs.particle.entry.ss3.preferredSize = [170, 20];
    dlg.tabs.particle.entry.ss4.preferredSize = [170, 20];
    dlg.tabs.particle.entry.ss5.preferredSize = [170, 20];

    dlg.tabs.particle.entry2.ss0.preferredSize = [170, 20];
    dlg.tabs.particle.entry2.ss1.preferredSize = [170, 20];
    dlg.tabs.particle.entry2.ss2.preferredSize = [170, 20];
    dlg.tabs.particle.entry2.ss3.preferredSize = [170, 20];

    //Color tab
    dlg.tabs.color.entry.ss0.preferredSize = [160, 20];
    dlg.tabs.color.entry.ss1.preferredSize = [160, 20];
    dlg.tabs.color.entry.ss2.preferredSize = [160, 20];
    dlg.tabs.color.entry.ss3.preferredSize = [160, 20];

    var item = dlg.tabs.color.entry.ss4.add ('item', 'Zero');
   item = dlg.tabs.color.entry.ss4.add ('item', 'One');
   item = dlg.tabs.color.entry.ss4.add ('item', 'Dst_Color');
   item = dlg.tabs.color.entry.ss4.add ('item', 'One_Minus_Dst_Color');
   item = dlg.tabs.color.entry.ss4.add ('item', 'Src_Alpha');
   item = dlg.tabs.color.entry.ss4.add ('item', 'One_Minus_Src_Alpha');
   item = dlg.tabs.color.entry.ss4.add ('item', 'Dst_Alpha');
   item = dlg.tabs.color.entry.ss4.add ('item', 'One_Minus_Dst_Alpha');
   item = dlg.tabs.color.entry.ss4.add ('item', 'Source_Alpha_Saturate');
   dlg.tabs.color.entry.ss4.selection = dlg.tabs.color.entry.ss4.items[1];

   var item = dlg.tabs.color.entry.ss5.add ('item', 'Zero');
   item = dlg.tabs.color.entry.ss5.add ('item', 'One');
   item = dlg.tabs.color.entry.ss5.add ('item', 'Dst_Color');
   item = dlg.tabs.color.entry.ss5.add ('item', 'One_Minus_Dst_Color');
   item = dlg.tabs.color.entry.ss5.add ('item', 'Src_Alpha');
   item = dlg.tabs.color.entry.ss5.add ('item', 'One_Minus_Src_Alpha');
   item = dlg.tabs.color.entry.ss5.add ('item', 'Dst_Alpha');
   item = dlg.tabs.color.entry.ss5.add ('item', 'One_Minus_Dst_Alpha');
   item = dlg.tabs.color.entry.ss5.add ('item', 'Source_Alpha_Saturate');
   dlg.tabs.color.entry.ss5.selection = dlg.tabs.color.entry.ss5.items[5];

    dlg.tabs.color.entry.ss4.onChange = function() {
       saveAll(true)
   }
   dlg.tabs.color.entry.ss5.onChange = function() {
       saveAll(true)
   }

    dlg.tabs.color.image.ssa.preferredSize = [160, 20];
    dlg.tabs.color.image.ss0.preferredSize = [160, 20];
    dlg.tabs.color.image.ss1.preferredSize = [160, 20];
    dlg.tabs.color.image.ss2.preferredSize = [160, 20];
    dlg.tabs.color.image.ss3.preferredSize = [160, 20];


    //Emiiter tab
    var item = dlg.tabs.emitter.entry.pType.mode.add ('item', 'Gravity');
   item = dlg.tabs.emitter.entry.pType.mode.add ('item', 'Radial');
   dlg.tabs.emitter.entry.pType.mode.selection = dlg.tabs.emitter.entry.pType.mode.items[0];

   //shows hide type groups accordingly
    dlg.tabs.emitter.entry.pType.mode.onChange = function() {
        if (dlg.tabs.emitter.entry.pType.mode.selection.text == "Gravity") {
          dlg.tabs.emitter.entry.ppType.gravity.visible = true;
          dlg.tabs.emitter.entry.ppType.radial.visible = false;
          dlg.tabs.emitter.value.ppType.gravity.visible = true;
          dlg.tabs.emitter.value.ppType.radial.visible = false;
          dlg.tabs.emitter.entry1.ppType.gravity.visible = true;
          dlg.tabs.emitter.entry1.ppType.radial.visible = false;
          dlg.tabs.emitter.value1.ppType.gravity.visible = true;
          dlg.tabs.emitter.value1.ppType.radial.visible = false;
          saveAll(true)
        } else {
          dlg.tabs.emitter.entry.ppType.gravity.visible = false;
          dlg.tabs.emitter.entry.ppType.radial.visible = true;
          dlg.tabs.emitter.value.ppType.gravity.visible = false;
          dlg.tabs.emitter.value.ppType.radial.visible = true;
          dlg.tabs.emitter.entry1.ppType.gravity.visible = false;
          dlg.tabs.emitter.entry1.ppType.radial.visible = true;
          dlg.tabs.emitter.value1.ppType.gravity.visible = false;
          dlg.tabs.emitter.value1.ppType.radial.visible = true;
          saveAll(true)
        };
    };

    dlg.tabs.emitter.entry.pType.mode.size = [130,25]
    //gravity
    dlg.tabs.emitter.entry.ppType.gravity.ss0.preferredSize = [160, 20];
    dlg.tabs.emitter.entry.ppType.gravity.ss1.preferredSize = [160, 20];
    dlg.tabs.emitter.entry.ppType.gravity.ss2.preferredSize = [160, 20];
    dlg.tabs.emitter.entry.ppType.gravity.ss3.preferredSize = [160, 20];
    dlg.tabs.emitter.entry1.ppType.gravity.ss0.preferredSize = [160, 20];
    dlg.tabs.emitter.entry1.ppType.gravity.ss1.preferredSize = [160, 20];
    dlg.tabs.emitter.entry1.ppType.gravity.ss2.preferredSize = [160, 20];
    dlg.tabs.emitter.entry1.ppType.gravity.ss3.preferredSize = [160, 20];

    //radius
    dlg.tabs.emitter.entry.ppType.radial.ss0.preferredSize = [160, 20];
    dlg.tabs.emitter.entry.ppType.radial.ss1.preferredSize = [160, 20];
    dlg.tabs.emitter.entry.ppType.radial.ss2.preferredSize = [160, 20];
    dlg.tabs.emitter.entry.ppType.radial.ss3.preferredSize = [160, 20];
    dlg.tabs.emitter.entry1.ppType.radial.ss0.preferredSize = [160, 20];
    dlg.tabs.emitter.entry1.ppType.radial.ss1.preferredSize = [160, 20];



    //common slides
    //** LOADS ALL DATA ***
    //Color and alpha - Tab Common
    dlg.tabs.common.data.e1.text = myParticles.startColorAlpha
    dlg.tabs.common.image.ss1.value = Number(dlg.tabs.common.data.e1.text);
    var startRed = Number(myParticles.startColorRed);
    var startGreen = Number(myParticles.startColorGreen);
    var startBlue = Number(myParticles.startColorBlue);

    //sets picker sample area
      dlg.tabs.common.image.pColor.rgbPicker.preferredSize = [30,20];
      dlg.tabs.common.image.pColor.alphaPicker.preferredSize = [30,20];
      var g = dlg.tabs.common.image.pColor.rgbPicker.graphics;
      var ga = dlg.tabs.common.image.pColor.alphaPicker.graphics;

       var b = String(startRed*255)+","+String(startGreen*255)+","+String(startBlue*255);
            b = b.split(' ').join('')
            var bred = parseFloat(Number(b.substr(0,b.search(",")) ) /255)
            var b1 = b.substr(b.search(",")+1,b.length)
            var bgreen = parseFloat(Number(b1.substr(0,b1.search(",")) ) / 255)
            var bblue = parseFloat(Number(b1.substr(b1.search(",")+1,b1.length) ) / 255)

      var myBrush = g.newBrush(g.BrushType.SOLID_COLOR, [bred, bgreen, bblue, 1]);
      g.backgroundColor = myBrush

      var alphaBrush = ga.newBrush(ga.BrushType.SOLID_COLOR, [bred, bgreen, bblue, Number(dlg.tabs.common.data.e1.text)]);
      ga.backgroundColor = alphaBrush


   //*** Color and alpha - Tab Color
    dlg.tabs.color.data.ea.text = myParticles.finishColorAlpha
    dlg.tabs.color.image.ssa.value = Number(dlg.tabs.color.data.ea.text);
    var endRed = Number(myParticles.finishColorRed);
    var endGreen = Number(myParticles.finishColorGreen);
    var endBlue = Number(myParticles.finishColorBlue);

    //sets picker sample area
      dlg.tabs.color.image.pColor.rgbPicker.preferredSize = [30,20];
      dlg.tabs.color.image.pColor.alphaPicker.preferredSize = [30,20];

      var ge = dlg.tabs.color.image.pColor.rgbPicker.graphics;
      var gea = dlg.tabs.color.image.pColor.alphaPicker.graphics;

       var b = String(endRed*255)+","+String(endGreen*255)+","+String(endBlue*255);
            b = b.split(' ').join('')
            var bred = parseFloat(Number(b.substr(0,b.search(",")) ) /255)
            var b1 = b.substr(b.search(",")+1,b.length)
            var bgreen = parseFloat(Number(b1.substr(0,b1.search(",")) ) / 255)
            var bblue = parseFloat(Number(b1.substr(b1.search(",")+1,b1.length) ) / 255)

      var myBrush = ge.newBrush(ge.BrushType.SOLID_COLOR, [bred, bgreen, bblue, 1]);
      ge.backgroundColor = myBrush

      var alphaBrush = gea.newBrush(gea.BrushType.SOLID_COLOR, [bred, bgreen, bblue, Number(dlg.tabs.color.data.ea.text)]);
      gea.backgroundColor = alphaBrush


    //TAB COMMON
    dlg.tabs.common.value.e.text = myParticles.duration
    dlg.tabs.common.value.e1.text = myParticles.sourcePositionVariancex
    dlg.tabs.common.value.e2.text = myParticles.sourcePositionVariancey
    dlg.tabs.common.value.e3.text = myParticles.maxParticles
    dlg.tabs.common.value.e4.text = ( myParticles.angle ) * -1
    dlg.tabs.common.value.e5.text = ( myParticles.angleVariance ) * -1
    dlg.tabs.common.entry.ss1.value = Number(dlg.tabs.common.value.e1.text);
    dlg.tabs.common.entry.ss2.value = Number(dlg.tabs.common.value.e2.text);
    dlg.tabs.common.entry.ss3.value = Number(dlg.tabs.common.value.e3.text);
    dlg.tabs.common.entry.ss4.value = Number(dlg.tabs.common.value.e4.text);
    dlg.tabs.common.entry.ss5.value = Number(dlg.tabs.common.value.e5.text);

    //TAB EMITTER
    var etype = myParticles.emitterType;
    if (etype == 0) {
        //gravity
        dlg.tabs.emitter.entry.ppType.gravity.visible = true;
        dlg.tabs.emitter.entry.ppType.radial.visible = false;
        dlg.tabs.emitter.value.ppType.gravity.visible = true;
        dlg.tabs.emitter.value.ppType.radial.visible = false;
        dlg.tabs.emitter.entry.pType.mode.selection = dlg.tabs.emitter.entry.pType.mode.items[0];

        dlg.tabs.emitter.value.ppType.gravity.e0.text = myParticles.speed
        dlg.tabs.emitter.value.ppType.gravity.e1.text = myParticles.speedVariance
        dlg.tabs.emitter.value.ppType.gravity.e2.text = myParticles.gravityx
        dlg.tabs.emitter.value.ppType.gravity.e3.text = myParticles.gravityy
        dlg.tabs.emitter.entry.ppType.gravity.ss0.value = Number(dlg.tabs.emitter.value.ppType.gravity.e0.text);
        dlg.tabs.emitter.entry.ppType.gravity.ss1.value = Number(dlg.tabs.emitter.value.ppType.gravity.e1.text);
        dlg.tabs.emitter.entry.ppType.gravity.ss2.value = Number(dlg.tabs.emitter.value.ppType.gravity.e2.text);
        dlg.tabs.emitter.entry.ppType.gravity.ss3.value = Number(dlg.tabs.emitter.value.ppType.gravity.e3.text);
        dlg.tabs.emitter.value1.ppType.gravity.e0.text = myParticles.radialAcceleration
        dlg.tabs.emitter.value1.ppType.gravity.e1.text = myParticles.radialAccelVariance
        dlg.tabs.emitter.value1.ppType.gravity.e2.text = myParticles.tangentialAcceleration
        dlg.tabs.emitter.value1.ppType.gravity.e3.text = myParticles.tangentialAccelVariance
        dlg.tabs.emitter.entry1.ppType.gravity.ss0.value = Number(dlg.tabs.emitter.value1.ppType.gravity.e0.text);
        dlg.tabs.emitter.entry1.ppType.gravity.ss1.value = Number(dlg.tabs.emitter.value1.ppType.gravity.e1.text);
        dlg.tabs.emitter.entry1.ppType.gravity.ss2.value = Number(dlg.tabs.emitter.value1.ppType.gravity.e2.text);
        dlg.tabs.emitter.entry1.ppType.gravity.ss3.value = Number(dlg.tabs.emitter.value1.ppType.gravity.e3.text);

    } else {
        //radial
        dlg.tabs.emitter.entry.ppType.gravity.visible = false;
        dlg.tabs.emitter.entry.ppType.radial.visible = true;
        dlg.tabs.emitter.value.ppType.gravity.visible = false;
        dlg.tabs.emitter.value.ppType.radial.visible = true;
        dlg.tabs.emitter.entry.pType.mode.selection = dlg.tabs.emitter.entry.pType.mode.items[1];

        dlg.tabs.emitter.value.ppType.radial.e0.text = myParticles.maxRadius
        dlg.tabs.emitter.value.ppType.radial.e1.text = myParticles.maxRadiusVariance
        dlg.tabs.emitter.value.ppType.radial.e2.text = myParticles.minRadius
        dlg.tabs.emitter.value.ppType.radial.e3.text = myParticles.minRadiusVariance
        dlg.tabs.emitter.entry.ppType.radial.ss0.value = Number(dlg.tabs.emitter.value.ppType.radial.e0.text);
        dlg.tabs.emitter.entry.ppType.radial.ss1.value = Number(dlg.tabs.emitter.value.ppType.radial.e1.text);
        dlg.tabs.emitter.entry.ppType.radial.ss2.value = Number(dlg.tabs.emitter.value.ppType.radial.e2.text);
        dlg.tabs.emitter.entry.ppType.radial.ss3.value = Number(dlg.tabs.emitter.value.ppType.radial.e3.text);
        dlg.tabs.emitter.value1.ppType.radial.e0.text = myParticles.rotatePerSecond
        dlg.tabs.emitter.value1.ppType.radial.e1.text = myParticles.rotatePerSecondVariance
        dlg.tabs.emitter.entry1.ppType.radial.ss0.value = Number(dlg.tabs.emitter.value1.ppType.radial.e0.text);
        dlg.tabs.emitter.entry1.ppType.radial.ss1.value = Number(dlg.tabs.emitter.value1.ppType.radial.e1.text);

    }

    //TAB PARTICLES
    dlg.tabs.particle.value.e0.text = myParticles.particleLifespan
    dlg.tabs.particle.value.e1.text = myParticles.particleLifespanVariance
    dlg.tabs.particle.value.e2.text = myParticles.startParticleSize
    dlg.tabs.particle.value.e3.text = myParticles.startParticleSizeVariance
    dlg.tabs.particle.value.e4.text = myParticles.finishParticleSize
    dlg.tabs.particle.value.e5.text = myParticles.finishParticleSizeVariance
    dlg.tabs.particle.entry.ss0.value = Number(dlg.tabs.particle.value.e0.text);
    dlg.tabs.particle.entry.ss1.value = Number(dlg.tabs.particle.value.e1.text);
    dlg.tabs.particle.entry.ss2.value = Number(dlg.tabs.particle.value.e2.text);
    dlg.tabs.particle.entry.ss3.value = Number(dlg.tabs.particle.value.e3.text);
    dlg.tabs.particle.entry.ss4.value = Number(dlg.tabs.particle.value.e4.text);
    dlg.tabs.particle.entry.ss5.value = Number(dlg.tabs.particle.value.e5.text);

    dlg.tabs.particle.value2.e0.text = myParticles.rotationStart
    dlg.tabs.particle.value2.e1.text = myParticles.rotationStartVariance
    dlg.tabs.particle.value2.e2.text = myParticles.rotationEnd
    dlg.tabs.particle.value2.e3.text = myParticles.rotationEndVariance
    dlg.tabs.particle.entry2.ss0.value = Number(dlg.tabs.particle.value2.e0.text);
    dlg.tabs.particle.entry2.ss1.value = Number(dlg.tabs.particle.value2.e1.text);
    dlg.tabs.particle.entry2.ss2.value = Number(dlg.tabs.particle.value2.e2.text);
    dlg.tabs.particle.entry2.ss3.value = Number(dlg.tabs.particle.value2.e3.text);

    //TAB COLORS
    dlg.tabs.color.value.e0.text = myParticles.startColorVarianceRed
    dlg.tabs.color.value.e1.text = myParticles.startColorVarianceGreen
    dlg.tabs.color.value.e2.text = myParticles.startColorVarianceBlue
    dlg.tabs.color.value.e3.text = myParticles.startColorVarianceAlpha
    dlg.tabs.color.entry.ss0.value = Number(dlg.tabs.color.value.e0.text);
    dlg.tabs.color.entry.ss1.value = Number(dlg.tabs.color.value.e1.text);
    dlg.tabs.color.entry.ss2.value = Number(dlg.tabs.color.value.e2.text);
    dlg.tabs.color.entry.ss3.value = Number(dlg.tabs.color.value.e3.text);
    var st = String(myParticles.blendFuncSource)
    switch (st) {
        case '0':
            st=0;
            break;
        case '1':
            st=1;
            break;
        case '774':
            st=2;
            break;
        case '775':
            st=3;
            break;
         case '770':
            st=4;
            break;
        case '771':
            st=5;
            break;
        case '772':
            st=6;
            break;
        case '773':
            st=7;
            break;
        case '776':
            st=8;
            break;
     }


    var st2 = String(myParticles.blendFuncDestination)
    switch (st2) {
        case '0':
            st2=0;
            break;
        case '1':
            st2=1;
            break;
        case '774':
            st2=2;
            break;
        case '775':
            st2=3;
            break;
         case '770':
            st2=4;
            break;
        case '771':
            st2=5;
            break;
        case '772':
            st2=6;
            break;
        case '773':
            st2=7;
            break;
        case '776':
            st2=8;
            break;
     }
    dlg.tabs.color.entry.ss4.selection = dlg.tabs.color.entry.ss4.items[st]
    dlg.tabs.color.entry.ss5.selection = dlg.tabs.color.entry.ss5.items[st2]


    dlg.tabs.color.data.ea.text = myParticles.finishColorAlpha

    dlg.tabs.color.data.e0.text = myParticles.finishColorVarianceRed
    dlg.tabs.color.data.e1.text = myParticles.finishColorVarianceGreen
    dlg.tabs.color.data.e2.text = myParticles.finishColorVarianceBlue
    dlg.tabs.color.data.e3.text = myParticles.finishColorVarianceAlpha
    dlg.tabs.color.image.ssa.value = Number(dlg.tabs.color.data.ea.text);
    dlg.tabs.color.image.ss0.value = Number(dlg.tabs.color.data.e0.text);
    dlg.tabs.color.image.ss1.value = Number(dlg.tabs.color.data.e1.text);
    dlg.tabs.color.image.ss2.value = Number(dlg.tabs.color.data.e2.text);
    dlg.tabs.color.image.ss3.value = Number(dlg.tabs.color.data.e3.text);



    //** MANAGE INTERFACE ***
    //TAB EMITTER
    //gravity
   dlg.tabs.emitter.entry.ppType.gravity.ss0.onChanging = function () {
        dlg.tabs.emitter.value.ppType.gravity.e0.text = parseFloat(dlg.tabs.emitter.entry.ppType.gravity.ss0.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value.ppType.gravity.e0.onChange = function () {
        dlg.tabs.emitter.entry.ppType.gravity.ss0.value = parseFloat(dlg.tabs.emitter.value.ppType.gravity.e0.text).toFixed(2);
        saveAll(true)
    };

    dlg.tabs.emitter.entry.ppType.gravity.ss1.onChanging = function () {
        dlg.tabs.emitter.value.ppType.gravity.e1.text = parseFloat(dlg.tabs.emitter.entry.ppType.gravity.ss1.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value.ppType.gravity.e1.onChange = function () {
        dlg.tabs.emitter.entry.ppType.gravity.ss1.value = parseFloat(dlg.tabs.emitter.value.ppType.gravity.e1.text).toFixed(2);
        saveAll(true)
    };

   dlg.tabs.emitter.entry.ppType.gravity.ss2.onChanging = function () {
        dlg.tabs.emitter.value.ppType.gravity.e2.text = parseFloat(dlg.tabs.emitter.entry.ppType.gravity.ss2.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value.ppType.gravity.e2.onChange = function () {
        dlg.tabs.emitter.entry.ppType.gravity.ss2.value = parseFloat(dlg.tabs.emitter.value.ppType.gravity.e2.text).toFixed(2);
        saveAll(true)
    };

    dlg.tabs.emitter.entry.ppType.gravity.ss3.onChanging = function () {
        dlg.tabs.emitter.value.ppType.gravity.e3.text = parseFloat(dlg.tabs.emitter.entry.ppType.gravity.ss3.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value.ppType.gravity.e3.onChange = function () {
        dlg.tabs.emitter.entry.ppType.gravity.ss3.value = parseFloat(dlg.tabs.emitter.value.ppType.gravity.e3.text).toFixed(2);
        saveAll(true)
    };

   dlg.tabs.emitter.entry1.ppType.gravity.ss0.onChanging = function () {
        dlg.tabs.emitter.value1.ppType.gravity.e0.text = parseFloat(dlg.tabs.emitter.entry1.ppType.gravity.ss0.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value1.ppType.gravity.e0.onChange = function () {
        dlg.tabs.emitter.entry1.ppType.gravity.ss0.value = parseFloat(dlg.tabs.emitter.value1.ppType.gravity.e0.text).toFixed(2);
        saveAll(true)
    };

    dlg.tabs.emitter.entry1.ppType.gravity.ss1.onChanging = function () {
        dlg.tabs.emitter.value1.ppType.gravity.e1.text = parseFloat(dlg.tabs.emitter.entry1.ppType.gravity.ss1.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value1.ppType.gravity.e1.onChange = function () {
        dlg.tabs.emitter.entry1.ppType.gravity.ss1.value = parseFloat(dlg.tabs.emitter.value1.ppType.gravity.e1.text).toFixed(2);
        saveAll(true)
    };

   dlg.tabs.emitter.entry1.ppType.gravity.ss2.onChanging = function () {
        dlg.tabs.emitter.value1.ppType.gravity.e2.text = parseFloat(dlg.tabs.emitter.entry1.ppType.gravity.ss2.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value1.ppType.gravity.e2.onChange = function () {
        dlg.tabs.emitter.entry1.ppType.gravity.ss2.value = parseFloat(dlg.tabs.emitter.value1.ppType.gravity.e2.text).toFixed(2);
        saveAll(true)
    };

    dlg.tabs.emitter.entry1.ppType.gravity.ss3.onChanging = function () {
        dlg.tabs.emitter.value1.ppType.gravity.e3.text = parseFloat(dlg.tabs.emitter.entry1.ppType.gravity.ss3.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value1.ppType.gravity.e3.onChange = function () {
        dlg.tabs.emitter.entry1.ppType.gravity.ss3.value = parseFloat(dlg.tabs.emitter.value1.ppType.gravity.e3.text).toFixed(2);
        saveAll(true)
    };
    //radial
   dlg.tabs.emitter.entry.ppType.radial.ss0.onChanging = function () {
        dlg.tabs.emitter.value.ppType.radial.e0.text = parseFloat(dlg.tabs.emitter.entry.ppType.radial.ss0.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value.ppType.radial.e0.onChange = function () {
        dlg.tabs.emitter.entry.ppType.radial.ss0.value = parseFloat(dlg.tabs.emitter.value.ppType.radial.e0.text).toFixed(2);
        saveAll(true)
    };

    dlg.tabs.emitter.entry.ppType.radial.ss1.onChanging = function () {
        dlg.tabs.emitter.value.ppType.radial.e1.text = parseFloat(dlg.tabs.emitter.entry.ppType.radial.ss1.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value.ppType.radial.e1.onChange = function () {
        dlg.tabs.emitter.entry.ppType.radial.ss1.value = parseFloat(dlg.tabs.emitter.value.ppType.radial.e1.text).toFixed(2);
        saveAll(true)
    };

   dlg.tabs.emitter.entry.ppType.radial.ss2.onChanging = function () {
        dlg.tabs.emitter.value.ppType.radial.e2.text = parseFloat(dlg.tabs.emitter.entry.ppType.radial.ss2.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value.ppType.radial.e2.onChange = function () {
        dlg.tabs.emitter.entry.ppType.radial.ss2.value = parseFloat(dlg.tabs.emitter.value.ppType.radial.e2.text).toFixed(2);
        saveAll(true)
    };

    dlg.tabs.emitter.entry.ppType.radial.ss3.onChanging = function () {
        dlg.tabs.emitter.value.ppType.radial.e3.text = parseFloat(dlg.tabs.emitter.entry.ppType.radial.ss3.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value.ppType.radial.e3.onChange = function () {
        dlg.tabs.emitter.entry.ppType.radial.ss3.value = parseFloat(dlg.tabs.emitter.value.ppType.radial.e3.text).toFixed(2);
        saveAll(true)
    };

   dlg.tabs.emitter.entry1.ppType.radial.ss0.onChanging = function () {
        dlg.tabs.emitter.value1.ppType.radial.e0.text = parseFloat(dlg.tabs.emitter.entry1.ppType.radial.ss0.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value1.ppType.radial.e0.onChange = function () {
        dlg.tabs.emitter.entry1.ppType.radial.ss0.value = parseFloat(dlg.tabs.emitter.value1.ppType.radial.e0.text).toFixed(2);
        saveAll(true)
    };

    dlg.tabs.emitter.entry1.ppType.radial.ss1.onChanging = function () {
        dlg.tabs.emitter.value1.ppType.radial.e1.text = parseFloat(dlg.tabs.emitter.entry1.ppType.radial.ss1.value).toFixed(2);
        saveAll(true)
    };
    dlg.tabs.emitter.value1.ppType.radial.e1.onChange = function () {
        dlg.tabs.emitter.entry1.ppType.radial.ss1.value = parseFloat(dlg.tabs.emitter.value1.ppType.radial.e1.text).toFixed(2);
        saveAll(true)
    };



    //TAB COMMON
    dlg.tabs.common.value.e.onChange = function () {
        saveAll(true)
    };
    dlg.tabs.common.entry.ss1.onChanging = function () {
        dlg.tabs.common.value.e1.text = parseInt(dlg.tabs.common.entry.ss1.value);
        saveAll(true)
    };

    dlg.tabs.common.value.e1.onChange = function () {
        dlg.tabs.common.entry.ss1.value = Number(dlg.tabs.common.value.e1.text);
        saveAll(true)
    };
    dlg.tabs.common.entry.ss2.onChanging = function () {
        dlg.tabs.common.value.e2.text = parseInt(dlg.tabs.common.entry.ss2.value);
        saveAll(true)
    };

    dlg.tabs.common.value.e2.onChange = function () {
        dlg.tabs.common.entry.ss2.value = Number(dlg.tabs.common.value.e2.text);
        saveAll(true)
    };
    dlg.tabs.common.entry.ss3.onChanging = function () {
        dlg.tabs.common.value.e3.text = parseInt(dlg.tabs.common.entry.ss3.value);
        saveAll(true)
    };

    dlg.tabs.common.value.e3.onChange = function () {
        dlg.tabs.common.entry.ss3.value = Number(dlg.tabs.common.value.e3.text);
        saveAll(true)
    };
    dlg.tabs.common.entry.ss4.onChanging = function () {
        dlg.tabs.common.value.e4.text = parseFloat(dlg.tabs.common.entry.ss4.value).toFixed(2);
        saveAll(true)
    };

    dlg.tabs.common.value.e4.onChange = function () {
        dlg.tabs.common.entry.ss4.value = Number(dlg.tabs.common.value.e4.text);
        saveAll(true)
    };
    dlg.tabs.common.entry.ss5.onChanging = function () {
        dlg.tabs.common.value.e5.text = parseFloat(dlg.tabs.common.entry.ss5.value).toFixed(2);
        saveAll(true)
    };

    dlg.tabs.common.value.e5.onChange = function () {
        dlg.tabs.common.entry.ss5.value = Number(dlg.tabs.common.value.e5.text);
        saveAll(true)
    };

    dlg.tabs.common.entry.cx.onClick = function () {
        if (dlg.tabs.common.entry.cx.value) {
            dlg.tabs.common.value.e1.text = parseInt(w/2);
            dlg.tabs.common.entry.ss1.value = Number(dlg.tabs.common.value.e1.text);
        }
        saveAll(true)
    };
    dlg.tabs.common.entry.cy.onClick = function () {
        if (dlg.tabs.common.entry.cy.value) {
            dlg.tabs.common.value.e2.text = parseInt(h/2);
            dlg.tabs.common.entry.ss2.value = Number(dlg.tabs.common.value.e2.text);
        }
        saveAll(true)
    };

   // dlg.image.file.graphics.backgroundColor = dlg.image.file.graphics.newBrush(dlg.image.file.graphics.BrushType.SOLID_COLOR,[0.5,0.5,0.5])
   // dlg.image.file.image = $.kwik.pluginFolder+ico;  //replace by image from the json file

    //function by
    createImage();

    //dlg.tabs.common.image.IconButton1 = dlg.tabs.common.image.add('iconbutton',undefined,$.kwik.projectFolder+"/"+ico);
    //alert($.kwik.projectFolder+"/temp/"+ico)
    var ic1Img = $.kwik.projectFolder+"/temp/"+ico;
    dlg.tabs.common.image.IconButton1.image = ScriptUI.newImage(ic1Img, ic1Img, ic1Img, ic1Img);

    dlg.tabs.common.image.IconButton1.text = 'Click to Change';

    dlg.tabs.common.image.IconButton1.titleLayout = new Object ({alignment:['center','bottom']});
    //dlg.image.file.image = $.kwik.pluginFolder+ico;  //replace by image from the json file
    dlg.tabs.common.image.IconButton1.size = [160,100]


    //MAIN COLOR AND ALPHA SETTINGS
    //Colorize the button but does not show the image
    /*
    dlg.tabs.common.data.color.size =  [60,30];
    dlg.tabs.common.data.color.text = "Change"
    dlg.tabs.common.data.color.graphics.font = "dialog:8";
    dlg.tabs.common.data.color.fillBrush = dlg.tabs.common.data.color.graphics.newBrush( dlg.tabs.common.data.color.graphics.BrushType.SOLID_COLOR, [startRed, startGreen, startBlue, Number(dlg.tabs.common.data.e1.text)] );
    //dlg.tabs.common.data.color.textPen = dlg.tabs.common.data.color.graphics.newPen (dlg.tabs.common.data.color.graphics.PenType.SOLID_COLOR,[0,0.5,0,1], 1);
    dlg.tabs.common.data.color.onDraw = customDraw;
    */

    var bNavi = $.kwik.pluginFolder+"images/kab_picker.png";
    dlg.tabs.common.data.color.image =  ScriptUI.newImage(bNavi, bNavi, bNavi,bNavi);
    dlg.tabs.common.data.color.size =  [60,30];
    dlg.tabs.common.data.color.helpTip = "Change color";

    dlg.tabs.common.data.color.onClick = function () {
            var b = String(startRed*255)+","+String(startGreen*255)+","+String(startBlue*255);

            b = b.split(' ').join('')
            var bred = b.substr(0,b.search(","))
            var b1 = b.substr(b.search(",")+1,b.length)
            var bgreen = b1.substr(0,b1.search(","))
            var bblue = b1.substr(b1.search(",")+1,b1.length)

            var x = new SolidColor;
            x.rgb.red = bred;
            x.rgb.green = bgreen;
            x.rgb.blue = bblue;
            x.color = x.hexValue;

            var calculatedColor = kGen.runColorPicker(x);

            //update the color sample
            var b = calculatedColor;
            b = b.split(' ').join('')
            var bred = parseFloat(Number(b.substr(0,b.search(",")) ) /255)
            var b1 = b.substr(b.search(",")+1,b.length)
            var bgreen = parseFloat(Number(b1.substr(0,b1.search(",")) ) / 255)
            var bblue = parseFloat(Number(b1.substr(b1.search(",")+1,b1.length) ) / 255)

            var myBrush = g.newBrush(g.BrushType.SOLID_COLOR, [bred, bgreen, bblue, 1]);
            g.backgroundColor = myBrush
            var alphaBrush = ga.newBrush(ga.BrushType.SOLID_COLOR, [bred, bgreen, bblue, Number(dlg.tabs.common.data.e1.text)]);
            ga.backgroundColor = alphaBrush

            startRed = bred;
            startGreen = bgreen;
            startBlue = bblue;

            saveAll(true)

    }

    //ALPHA Settings
    dlg.tabs.common.image.ss1.onChanging = function () {
        dlg.tabs.common.data.e1.text = String(parseFloat(dlg.tabs.common.image.ss1.value)).substring(0,4);
        kab_updateAlpha()
        saveAll(true)
    };

    dlg.tabs.common.data.e1.onChange = function () {
        dlg.tabs.common.image.ss1.value = Number(dlg.tabs.common.data.e1.text);
        kab_updateAlpha()
        saveAll(true)
    };

    function kab_updateAlpha() {

                var b = String(startRed*255)+","+String(startGreen*255)+","+String(startBlue*255);

                b = b.split(' ').join('')
                var bred = parseFloat(Number(b.substr(0,b.search(",")) ) /255)
                var b1 = b.substr(b.search(",")+1,b.length)
                var bgreen = parseFloat(Number(b1.substr(0,b1.search(",")) ) / 255)
                var bblue = parseFloat(Number(b1.substr(b1.search(",")+1,b1.length) ) / 255)

                var alphaBrush = ga.newBrush(ga.BrushType.SOLID_COLOR, [bred, bgreen, bblue, Number(dlg.tabs.common.data.e1.text)]);
                ga.backgroundColor = alphaBrush

                startRed = bred;
                startGreen = bgreen;
                startBlue = bblue;

    }


    //TAB PARTICLE
   dlg.tabs.particle.entry.ss0.onChanging = function () {
        dlg.tabs.particle.value.e0.text = parseFloat(dlg.tabs.particle.entry.ss0.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value.e0.onChange = function () {
        dlg.tabs.particle.entry.ss0.value = parseFloat(dlg.tabs.particle.value.e0.text).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.particle.entry.ss1.onChanging = function () {
        dlg.tabs.particle.value.e1.text = parseFloat(dlg.tabs.particle.entry.ss1.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value.e1.onChange = function () {
        dlg.tabs.particle.entry.ss1.value = parseFloat(dlg.tabs.particle.value.e1.text).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.particle.entry.ss2.onChanging = function () {
        dlg.tabs.particle.value.e2.text = parseFloat(dlg.tabs.particle.entry.ss2.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value.e2.onChange = function () {
        dlg.tabs.particle.entry.ss2.value = parseFloat(dlg.tabs.particle.value.e2.text).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.particle.entry.ss3.onChanging = function () {
        dlg.tabs.particle.value.e3.text = parseFloat(dlg.tabs.particle.entry.ss3.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value.e3.onChange = function () {
        dlg.tabs.particle.entry.ss3.value = parseFloat(dlg.tabs.particle.value.e3.text).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.particle.entry.ss4.onChanging = function () {
        dlg.tabs.particle.value.e4.text = parseFloat(dlg.tabs.particle.entry.ss4.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value.e4.onChange = function () {
        dlg.tabs.particle.entry.ss4.value = parseFloat(dlg.tabs.particle.value.e4.text).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.particle.entry.ss5.onChanging = function () {
        dlg.tabs.particle.value.e5.text = parseFloat(dlg.tabs.particle.entry.ss5.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value.e5.onChange = function () {
        dlg.tabs.particle.entry.ss5.value = parseFloat(dlg.tabs.particle.value.e5.text).toFixed(2);
        saveAll(true);
    };
   dlg.tabs.particle.entry2.ss0.onChanging = function () {
        dlg.tabs.particle.value2.e0.text = parseFloat(dlg.tabs.particle.entry2.ss0.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value2.e0.onChange = function () {
        dlg.tabs.particle.entry2.ss0.value = parseFloat(dlg.tabs.particle.value2.e0.text).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.particle.entry2.ss1.onChanging = function () {
        dlg.tabs.particle.value2.e1.text = parseFloat(dlg.tabs.particle.entry2.ss1.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value2.e1.onChange = function () {
        dlg.tabs.particle.entry2.ss1.value = parseFloat(dlg.tabs.particle.value2.e1.text).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.particle.entry2.ss2.onChanging = function () {
        dlg.tabs.particle.value2.e2.text = parseFloat(dlg.tabs.particle.entry2.ss2.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value2.e2.onChange = function () {
        dlg.tabs.particle.entry2.ss2.value = parseFloat(dlg.tabs.particle.value2.e2.text).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.particle.entry2.ss3.onChanging = function () {
        dlg.tabs.particle.value2.e3.text = parseFloat(dlg.tabs.particle.entry2.ss3.value).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.particle.value2.e3.onChange = function () {
        dlg.tabs.particle.entry2.ss3.value = parseFloat(dlg.tabs.particle.value2.e3.text).toFixed(2);
        saveAll(true);
    };


    //TAB COLOR
   dlg.tabs.color.entry.ss0.onChanging = function () {
        dlg.tabs.color.value.e0.text = parseFloat(dlg.tabs.color.entry.ss0.value).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.color.value.e0.onChange = function () {
        dlg.tabs.color.entry.ss0.value = parseFloat(dlg.tabs.color.value.e0.text).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.color.entry.ss1.onChanging = function () {
        dlg.tabs.color.value.e1.text = parseFloat(dlg.tabs.color.entry.ss1.value).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.color.value.e1.onChange = function () {
        dlg.tabs.color.entry.ss1.value = parseFloat(dlg.tabs.color.value.e1.text).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.color.entry.ss2.onChanging = function () {
        dlg.tabs.color.value.e2.text = parseFloat(dlg.tabs.color.entry.ss2.value).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.color.value.e2.onChange = function () {
        dlg.tabs.color.entry.ss2.value = parseFloat(dlg.tabs.color.value.e2.text).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.color.entry.ss3.onChanging = function () {
        dlg.tabs.color.value.e3.text = parseFloat(dlg.tabs.color.entry.ss3.value).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.color.value.e3.onChange = function () {
        dlg.tabs.color.entry.ss3.value = parseFloat(dlg.tabs.color.value.e3.text).toFixed(2);
        saveAll(true);
    };


   dlg.tabs.color.image.ssa.onChanging = function () {
        dlg.tabs.color.data.ea.text = parseFloat(dlg.tabs.color.image.ssa.value).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.color.data.e0.onChange = function () {
        dlg.tabs.color.image.ss0.value = parseFloat(dlg.tabs.color.data.e0.text).toFixed(2);
        saveAll(true);
    };

   dlg.tabs.color.image.ss0.onChanging = function () {
        dlg.tabs.color.data.e0.text = parseFloat(dlg.tabs.color.image.ss0.value).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.color.data.e0.onChange = function () {
        dlg.tabs.color.image.ss0.value = parseFloat(dlg.tabs.color.data.e0.text).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.color.image.ss1.onChanging = function () {
        dlg.tabs.color.data.e1.text = parseFloat(dlg.tabs.color.image.ss1.value).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.color.data.e1.onChange = function () {
        dlg.tabs.color.image.ss1.value = parseFloat(dlg.tabs.color.data.e1.text).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.color.image.ss2.onChanging = function () {
        dlg.tabs.color.data.e2.text = parseFloat(dlg.tabs.color.image.ss2.value).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.color.data.e2.onChange = function () {
        dlg.tabs.color.image.ss2.value = parseFloat(dlg.tabs.color.data.e2.text).toFixed(2);
        saveAll(true);
    };

    dlg.tabs.color.image.ss3.onChanging = function () {
        dlg.tabs.color.data.e3.text = parseFloat(dlg.tabs.color.image.ss3.value).toFixed(2);
        saveAll(true);
    };
    dlg.tabs.color.data.e3.onChange = function () {
        dlg.tabs.color.image.ss3.value = parseFloat(dlg.tabs.color.data.e3.text).toFixed(2);
        saveAll(true);
    };


    dlg.tabs.color.data.color.image =  ScriptUI.newImage(bNavi,bNavi, bNavi,bNavi);
    dlg.tabs.color.data.color.size =  [60,30];
    dlg.tabs.color.data.color.helpTip = "Change color";

    dlg.tabs.color.data.color.onClick = function () {
            var b = String(endRed*255)+","+String(endGreen*255)+","+String(endBlue*255);

            b = b.split(' ').join('')
            var bred = b.substr(0,b.search(","))
            var b1 = b.substr(b.search(",")+1,b.length)
            var bgreen = b1.substr(0,b1.search(","))
            var bblue = b1.substr(b1.search(",")+1,b1.length)

            var x = new SolidColor;
            x.rgb.red = bred;
            x.rgb.green = bgreen;
            x.rgb.blue = bblue;
            x.color = x.hexValue;

            var calculatedColor = kGen.runColorPicker(x);

            //update the color sample
            var b = calculatedColor;
            b = b.split(' ').join('')
            var bred = parseFloat(Number(b.substr(0,b.search(",")) ) /255)
            var b1 = b.substr(b.search(",")+1,b.length)
            var bgreen = parseFloat(Number(b1.substr(0,b1.search(",")) ) / 255)
            var bblue = parseFloat(Number(b1.substr(b1.search(",")+1,b1.length) ) / 255)

            var myBrush = ge.newBrush(g.BrushType.SOLID_COLOR, [bred, bgreen, bblue, 1]);
            ge.backgroundColor = myBrush

            var alphaBrush = gea.newBrush(gea.BrushType.SOLID_COLOR, [bred, bgreen, bblue, Number(dlg.tabs.color.data.ea.text)]);
            gea.backgroundColor = alphaBrush

            endRed = bred;
            endGreen = bgreen;
            endBlue = bblue;

            saveAll(true)
    }

    //ALPHA Settings
    dlg.tabs.color.image.ssa.onChanging = function () {
        dlg.tabs.color.data.ea.text = String(parseFloat(dlg.tabs.color.image.ssa.value)).substring(0,4);
        kab_updateEndAlpha()
        saveAll(true)
    };

    dlg.tabs.color.data.ea.onChange = function () {
        dlg.tabs.color.image.ssa.value = Number(dlg.tabs.color.data.ea.text);
        kab_updateEndAlpha()
        saveAll(true)
    };

    function kab_updateEndAlpha() {

                var b = String(endRed*255)+","+String(endGreen*255)+","+String(endBlue*255);

                b = b.split(' ').join('')
                var bred = parseFloat(Number(b.substr(0,b.search(",")) ) /255)
                var b1 = b.substr(b.search(",")+1,b.length)
                var bgreen = parseFloat(Number(b1.substr(0,b1.search(",")) ) / 255)
                var bblue = parseFloat(Number(b1.substr(b1.search(",")+1,b1.length) ) / 255)

                var alphaBrush = gea.newBrush(gea.BrushType.SOLID_COLOR, [bred, bgreen, bblue, Number(dlg.tabs.color.data.ea.text)]);
                gea.backgroundColor = alphaBrush

                endRed = bred;
                endGreen = bgreen;
                endBlue = bblue;

    }




    //*** BUTTONS ***
    //Preview button
    dlg.partName.preview.b.onClick = function () {

        saveAll(true); //send command as a preview

        var jname = cname.replace(/"/gi, "")
        var iname = ico.replace(/"/gi, "");
        //creates temp folder
        var tempFolder = $.kwik.projectFolder+"/temp";
        var a = Folder(tempFolder);
        if (!a.exists) {
           a.create()
        }

      //  if (!File(tempFolder+"/main.lua").exists) {
                //create main.lua file
                var mfile = 'display.setStatusBar( display.HiddenStatusBar ) \r\n';
                mfile += 'local particleDesigner = require( "particleDesigner" ) \r\n';
                mfile += 'local kaboom = particleDesigner.newEmitter( "'+jname+'_temp.json" )  \r\n';
                mfile += 'kaboom.x = display.contentWidth / 2; kaboom.y = display.contentHeight / 2; \r\n';
                //save file
                var fil = tempFolder+"/main.lua";

                var coFile = File(fil);
                coFile.open("w","TEXT","????");
                coFile.write(mfile);
                coFile.close();

                //copy particleDesigner.lua file
                var syncLua = File($.kwik.pluginFolder+"/Library/particleDesigner.lua");
                syncLua.copy(tempFolder+"/particleDesigner.lua");
        //}

        //copy json and png particle files
        var syncLua = File($.kwik.projectFolder+"/"+jname+"_temp.json");
        syncLua.copy(tempFolder+"/"+jname+"_temp.json");

        if (iname!=""){
            var syncLua = File($.kwik.projectFolder+"/"+iname);
            syncLua.copy(tempFolder+"/"+iname);
        }
        //run solar2d
        solar2d.startSolar2D(true)
    };

    dlg.buttons.hb.onClick = function() {
        openURL("https://kwiksher.com/doc/kwik_toolset/layers_and_replacements/particles/");
    }


    dlg.buttons.cb.onClick = function () {
        partPath = file;
        partImgPath = ico;
        save = false;
        dlg.close();
    }

    //created particles
    dlg.buttons.pb.onClick = function () {
        saveAll(false)
        partPath = file;
        partImgPath = ico;
        save = true;
        dlg.close();
    }

    function saveAll(preview) {
            //SAVE PARTICLES
//            if (String(file) == String($.kwik.pluginFolder+"kaboom-sample.json")) {
        if (preview){
                file = $.kwik.projectFolder+"/temp/"+kGen.rename(dlg.partName.e.text)+".json"
        }else{
                file = $.kwik.projectFolder+"/kaboom/"+kGen.rename(dlg.partName.e.text)+".json"
        }
//            }
            myParticles.configName = '"'+kGen.rename(dlg.partName.e.text)+'"';

            //update content
            myParticles.duration = dlg.tabs.common.value.e.text
            myParticles.sourcePositionVariancex = dlg.tabs.common.value.e1.text
            myParticles.sourcePositionVariancey = dlg.tabs.common.value.e2.text
            myParticles.maxParticles = dlg.tabs.common.value.e3.text
            myParticles.angle = Number(dlg.tabs.common.value.e4.text) * -1
            myParticles.angleVariance = Number(dlg.tabs.common.value.e5.text) * -1

            //startColor and alpha
            myParticles.startColorAlpha = Number(dlg.tabs.common.data.e1.text);
            myParticles.startColorRed = Number(startRed);
            myParticles.startColorGreen = Number(startGreen);
            myParticles.startColorBlue = Number(startBlue);

            //image/texture
 //alert("oriPart: "+oriParticleFile+", preview:"+preview)
            if (oriParticleFile != true && preview == true) {
//alert("preview new image")
                myParticles.textureFileName = '"'+newParticleFile+'"';
            }  else if (oriParticleFile != true && preview != true) {
//alert("save new image")
                var syncLua = File($.kwik.projectFolder+"/temp/"+newParticleFile);
                syncLua.copy($.kwik.projectFolder+"/temp/"+kGen.rename(dlg.partName.e.text)+".png");
                syncLua.copy($.kwik.projectFolder+"/kaboom/"+kGen.rename(dlg.partName.e.text)+".png");

                ico = dlg.partName.e.text+".png";
                ico = ico.replace(/"/gi, "")
                myParticles.textureFileName = '"'+ico+'"';
             }  else if (oriParticleFile == true && preview != true) {
//alert("new particle creation")
//alert($.kwik.projectFolder+"/kaboom.png")
//alert($.kwik.projectFolder+"/"+kGen.rename(dlg.partName.e.text)+".png")
                var syncLua = File($.kwik.projectFolder+"/temp/kaboom.png");
                syncLua.copy($.kwik.projectFolder+"/temp/"+kGen.rename(dlg.partName.e.text)+".png");
                syncLua.copy($.kwik.projectFolder+"/kaboom/"+kGen.rename(dlg.partName.e.text)+".png");

                ico = dlg.partName.e.text+".png";
                ico = ico.replace(/"/gi, "")
//alert(ico)
                myParticles.textureFileName = '"'+ico+'"';
            } else {
//alert("update particle with same image")
                ico = ico.replace(/"/gi, "")
                myParticles.textureFileName = '"'+ico+'"';
            }

            //emitter content
            if (dlg.tabs.emitter.entry.pType.mode.selection.text == "Gravity") {
                myParticles.emitterType = 0
                myParticles.speed = dlg.tabs.emitter.value.ppType.gravity.e0.text
                myParticles.speedVariance = dlg.tabs.emitter.value.ppType.gravity.e1.text
                myParticles.gravityx = dlg.tabs.emitter.value.ppType.gravity.e2.text
                myParticles.gravityy = dlg.tabs.emitter.value.ppType.gravity.e3.text
                myParticles.radialAcceleration = dlg.tabs.emitter.value1.ppType.gravity.e0.text
                myParticles.radialAccelVariance = dlg.tabs.emitter.value1.ppType.gravity.e1.text
                myParticles.tangentialAcceleration = dlg.tabs.emitter.value1.ppType.gravity.e2.text
                myParticles.tangentialAccelVariance = dlg.tabs.emitter.value1.ppType.gravity.e3.text
            } else {
                myParticles.emitterType = 1
                myParticles.maxRadius = dlg.tabs.emitter.value.ppType.radial.e0.text
                myParticles.maxRadiusVariance = dlg.tabs.emitter.value.ppType.radial.e1.text
                myParticles.minRadius = dlg.tabs.emitter.value.ppType.radial.e2.text
                myParticles.minRadiusVariance = dlg.tabs.emitter.value.ppType.radial.e3.text
                myParticles.rotatePerSecond = dlg.tabs.emitter.value1.ppType.radial.e0.text
                myParticles.rotatePerSecondVariance = dlg.tabs.emitter.value1.ppType.radial.e1.text
            }

            //particles content
            myParticles.particleLifespan = dlg.tabs.particle.value.e0.text
            myParticles.particleLifespanVariance = dlg.tabs.particle.value.e1.text
            myParticles.startParticleSize = dlg.tabs.particle.value.e2.text
            myParticles.startParticleSizeVariance = dlg.tabs.particle.value.e3.text
            myParticles.finishParticleSize = dlg.tabs.particle.value.e4.text
            myParticles.finishParticleSizeVariance = dlg.tabs.particle.value.e5.text

            myParticles.rotationStart = dlg.tabs.particle.value2.e0.text
            myParticles.rotationStartVariance = dlg.tabs.particle.value2.e1.text
            myParticles.rotationEnd = dlg.tabs.particle.value2.e2.text
            myParticles.rotationEndVariance = dlg.tabs.particle.value2.e3.text

            //Color content
            myParticles.startColorVarianceRed = dlg.tabs.color.value.e0.text
            myParticles.startColorVarianceGreen = dlg.tabs.color.value.e1.text
            myParticles.startColorVarianceBlue = dlg.tabs.color.value.e2.text
            myParticles.startColorVarianceAlpha = dlg.tabs.color.value.e3.text
            var st = String(dlg.tabs.color.entry.ss4.selection)
            switch (st) {
                case 'Zero':
                    st=0;
                    break;
                case 'One':
                    st=1;
                    break;
                case 'Dst_Color':
                    st=774;
                    break;
                case 'One_Minus_Dst_Color':
                    st=775;
                    break;
                 case 'Src_Alpha':
                    st=770;
                    break;
                case 'One_Minus_Src_Alpha':
                    st=771;
                    break;
                case 'Dst_Alpha':
                    st=772;
                    break;
                case 'One_Minus_Dst_Alpha':
                    st=773;
                    break;
                case 'Source_Alpha_Saturate':
                    st=776;
                    break;
             }
             var st1 = String(dlg.tabs.color.entry.ss5.selection)
             switch (st1) {
                case 'Zero':
                    st1=0;
                    break;
                case 'One':
                    st1=1;
                    break;
                case 'Dst_Color':
                    st1=774;
                    break;
                case 'One_Minus_Dst_Color':
                    st1=775;
                    break;
                 case 'Src_Alpha':
                    st1=770;
                    break;
                case 'One_Minus_Src_Alpha':
                    st1=771;
                    break;
                case 'Dst_Alpha':
                    st1=772;
                    break;
                case 'One_Minus_Dst_Alpha':
                    st1=773;
                    break;
                case 'Source_Alpha_Saturate':
                    st1=776;
                    break;
             }

            myParticles.blendFuncSource = st;
            myParticles.blendFuncDestination = st1;

            myParticles.finishColorVarianceRed = dlg.tabs.color.data.e0.text
            myParticles.finishColorVarianceGreen = dlg.tabs.color.data.e1.text
            myParticles.finishColorVarianceBlue = dlg.tabs.color.data.e2.text
            myParticles.finishColorVarianceAlpha = dlg.tabs.color.data.e3.text
            myParticles.finishColorAlpha = Number(dlg.tabs.color.data.ea.text);
            myParticles.finishColorRed = Number(endRed);
            myParticles.finishColorGreen = Number(endGreen);
            myParticles.finishColorBlue = Number(endBlue);

        /*
            //clear potential previous entry for the same layer
            for (var pp=0;pp<=myParticles.maxRadius.length()-1;pp++) {
                    delete myParticles.maxRadius[pp];
            }

            //add new maxRadius
            myParticles.maxRadius = 0
       */
            if (preview) {
                var tfile = file.substring(0,file.length-5)+"_temp.json"
                xmJSON(tfile); //saves just a preview file
                var jname = cname.replace(/"/gi, "");
                var iname = ico.replace(/"/gi, "");
                var tempFolder = $.kwik.projectFolder+"/temp";
                //copy json and png particle files
                // var syncLua = File($.kwik.projectFolder+"/"+jname+"_temp.json");
                // var syncLua = File(tfile);
                // syncLua.copy(tempFolder+"/"+jname+"_temp.json");

                //png
                // if (iname!=""){
                //     var syncLua = File($.kwik.projectFolder+"/"+iname);
                //     syncLua.copy(tempFolder+"/"+iname);
                // }
            } else {
                xmJSON($.kwik.projectFolder+"/kaboom/"+kGen.rename(dlg.partName.e.text)+".json"); //saves final file
            }
            return;
    }


    // start showing just page 1
    dlg.tabs.common.visible = true;
    dlg.tabs.particle.visible = false;
    dlg.tabs.color.visible = false;
    dlg.tabs.emitter.visible = false;

    var ico1 = $.kwik.pluginFolder+"images/kab_common.png";
    var ico2 = $.kwik.pluginFolder+"images/kab_emitter.png";
    var ico3 = $.kwik.pluginFolder+"images/kab_particles.png";
    var ico4 = $.kwik.pluginFolder+"images/kab_color.png";

    dlg.tab.button01.image = ScriptUI.newImage(ico1, ico1, ico1, ico1);
    dlg.tab.button02.image = ScriptUI.newImage(ico2, ico2, ico2, ico2);
    dlg.tab.button03.image = ScriptUI.newImage(ico3, ico3, ico3, ico3);
    dlg.tab.button04.image = ScriptUI.newImage(ico4, ico4, ico4, ico4);

    dlg.tab.button01.helpTip = "Default Settings";
    dlg.tab.button02.helpTip = "Emitter Settings";
    dlg.tab.button03.helpTip = "Particle Settings";
    dlg.tab.button04.helpTip = "Color Settings";

    //Loads a new image and update the textureFileName property
    dlg.tabs.common.image.IconButton1.onClick = function () {
            var ftype = 'Image file: *.png';
            var aNewImage = String(File.openDialog (_Select_location_, ftype, 0));
            if (aNewImage=="null")return;
            var ext = aNewImage.substr(aNewImage.length-4,4);
            ext = ext.toLowerCase();

            if (ext==".png" || ext=="png") {

                var fullPath = aNewImage;
                    var filename = /([^\\]+)$/.exec(fullPath)[1];
                    fileName = fullPath.replace(/^.*(\\|\/|\:)/, '');
                    fileName = fileName.replace(/"/gi, "")
                    ico = fileName;

                    //save new file in the same project folder as a temp design
//                    var nname = ico; //ico.substring(0,ico.length-4)+"_temp.png";
                    var syncLua = File(aNewImage);
                    syncLua.copy($.kwik.projectFolder+"/temp/"+fileName);

                    //update info about image change
                    oriParticleFile = false;
                    newParticleFile = fileName;

                    //update particleFile
                    myParticles.textureFileName = '"'+fileName+'"';
                    //myParticles.textureFileName = '"'+nname+'"';
                    dlg.tabs.common.image.IconButton1.image = ScriptUI.newImage(aNewImage, aNewImage, aNewImage, aNewImage);

                    saveAll(true);


                } else {
                      kGen.alerta(_Please_select_valid_image_file_);
            }

    }



    // show Defaults's page
    dlg.tab.button01.onClick = function() {
       try {
          dlg.tabs.particle.visible = false;
          dlg.tabs.color.visible = false;
          dlg.tabs.emitter.visible = false;
          dlg.tabs.common.visible = true;

       } catch (e) {
          // do nothing on error
       };
    };

    // show Emitter's page
    dlg.tab.button02.onClick = function() {
       try {
          dlg.tabs.emitter.visible = true;
          dlg.tabs.color.visible = false;
          dlg.tabs.particle.visible = false;
          dlg.tabs.common.visible = false;

       } catch (e) {
          // do nothing on error
       };
    };

    // show Particle's page
    dlg.tab.button03.onClick = function() {
       try {
          dlg.tabs.emitter.visible = false;
          dlg.tabs.particle.visible = true;
          dlg.tabs.color.visible = false;
          dlg.tabs.common.visible = false;

       } catch (e) {
          // do nothing on error
       };
    };

    // show Color pages
    dlg.tab.button04.onClick = function() {
       try {
          dlg.tabs.emitter.visible = false;
          dlg.tabs.particle.visible = false;
          dlg.tabs.color.visible = true;
          dlg.tabs.common.visible = false;

       } catch (e) {
          // do nothing on error
       };
    };

    // display the window to the user
    dlg.center();
    dlg.show();

    return {'partPath': partPath, 'partImgPath':partImgPath, 'save':save};
}



function jsonXML(file) {
    var a = new File(file);
    a.open('r');

    var toxml = ""

    while(!a.eof){
        //myLineArray.push(a.readln());
        var garb = a.readln();

        //handles files with spaces in the name
        var configName = "";
        if (garb.search("configName") > 0 ) {
            configName = garb.substring(18,garb.length-2)
            configName = configName.replace(/"/gi, "");
        }

        var imagefile = "";
        if (garb.search("textureFileName") > 0 ) {
            imagefile = garb.substring(23,garb.length-2)
            imagefile = imagefile.replace(/"/gi, "");
        }
        //remove all spaces
        garb = garb.replace(/ /gi, "");

        if (garb == "{") {
            toxml += garb.replace("{", "<particles>");
        } else if (garb == "}") {
            toxml += garb.replace("}", "</particles>");
        } else if (garb.search("configName") > 0 ) {
            toxml += '<configName>"'+configName+'"</configName>';
        } else if (garb.search("textureFileName") > 0 ) {
            toxml += '<textureFileName>"'+imagefile+'"</textureFileName>';
        } else {
            garb = garb.replace('"', "<")
            var para = garb.substring(1,garb.search('":'))
            garb = garb.replace('":', ">");
            garb = garb.replace(',', "");
            garb = garb+"</"+para+">";
            toxml += garb;
        }
    }
    a.close();
    //toxml += garb + "</particles>";
     // toxml += "</particles>";
   //alert(toxml)
    return (toxml);
}
//jsonXML(fil)

//myParticles.startColorAlpha = 0.9

//xmJSON(fil)

function xmJSON(file) {

    var j = "{ \r\n"

    for (var xn=0;xn<=myParticles.elements().length()-1;xn++) {
        if (xn!=myParticles.elements().length()-1) {
            j += '   "'+myParticles.child(xn).name()+'" : '+myParticles.child(xn)+', \r\n';
        } else {
            j += '   "'+myParticles.child(xn).name()+'" : '+myParticles.child(xn)+' \r\n';
        }
    }
    j += "}"

    //save file
    var jsave = File(file);
    jsave.open("w","TEXT","????");
    var projFileXML = jsave.write(j);
    jsave.close();

    return
}
