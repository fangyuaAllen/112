if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();

}




// function 第一个脚本() {

    // var 软件名 = "青青草原"
    // var 包名 = "com.hainanykgs.qqcy"
    // var Runningtime1 = ui.Runningtime1.getText().toString() //分钟 
    // putStorage("Runningtime1", Runningtime1);
    // var 时间开始 = new Date().getTime() //记录开始运行时间
    // 清理后台()
    // launchPackage(包名)
    // log("正在启动 " + 软件名 + "...");
    // sleep(8000)



    threads.start(function () {
        检测()
    })


    function 检测() {
        while (true) {
            try {

                if (className("android.widget.FrameLayout").findOnce()) {
                    toastLog("卡屏检测中……")
                    var num1 = className("android.view.View").find().length;
                    log("a=" + num1)
                    var num1_1 = className("android.widget.FrameLayout").find().length;
                    var num1_2 = className("android.widget.LinearLayout").find().length;
                    var num1_3 = className("android.widget.Image").find().length;
                    log("a=" + num1_1)
                    log("a=" + num1_2)
                    log("a=" + num1_3)

                    sleep(30000)
                    var num2 = className("android.view.View").find().length;
                    log("b=" + num2)
                    var num2_1 = className("android.widget.FrameLayout").find().length;
                    var num2_2 = className("android.widget.LinearLayout").find().length;
                    var num2_3 = className("android.widget.Image").find().length;
                    log("b=" + num2_1)
                    log("b=" + num2_2)
                    log("b=" + num2_3)
                    sleep(30000)
                    var num3 = className("android.view.View").find().length;
                    log("c=" + num3)
                    var num3_1 = className("android.widget.FrameLayout").find().length;
                    var num3_2 = className("android.widget.LinearLayout").find().length;
                    var num3_3 = className("android.widget.Image").find().length;
                    log("c=" + num3_1)
                    log("c=" + num3_2)
                    log("c=" + num3_3)
                    sleep(30000)
                    var num4 = className("android.view.View").find().length;
                    log("d=" + num4)
                    var num4_1 = className("android.widget.FrameLayout").find().length;
                    var num4_2 = className("android.widget.LinearLayout").find().length;
                    var num4_3 = className("android.widget.Image").find().length;
                    log("d=" + num4_1)
                    log("d=" + num4_2)
                    log("d=" + num4_3)
                    sleep(2000)
                    if (num1 == num2 && num2 == num3 && num3 == num4 && num1_1 == num2_1 && num2_1 == num3_1 && num3_1 == num4_1 && num1_2 == num2_2 && num2_2 == num3_2 && num3_2 == num4_2 && num1_3 == num2_3 && num2_3 == num3_3 && num3_3 == num4_3) {
                        toastLog("发现长时间处于一个界面")
                        sleep(1000)
                        home()
                        sleep(1500)

                        home()

                        sleep("2000")
                        recents()
                        sleep("1500")
                        if (desc("清除全部-按钮").findOnce()) {
                            desc("清除全部-按钮").findOnce().parent().click()
                            sleep(1500)
                        }

                        click(device.width / 2, device.height * 0.88)
                        sleep("2000")


                        recents()
                        sleep("2000")
                        click(device.width / 2, device.height * 0.5)

                    }
                }

            } catch (a) {
                continue;
            }
        }
    }
    function 检测当前() {

        if (currentPackage() != "com.hainanykgs.qqcy") {

            sleep(6000)
            app.launch("com.hainanykgs.qqcy");
            console.log("重新打开APP")
            sleep(1000);
        } else {

        }

    }


    function 找图(所找图) {



        let 大图 = captureScreen()
        //let 大图 = images.copy(大图1)
        let 小图 = images.fromBase64(所找图)

        let p = findImage(大图, 小图, {
            threshold: 0.85,
            region: [23, 325, 1000, 1600]

        })

        if (p) {


            //console.log("找到"+ 小图 )
            let xx = p.x
            let yy = p.y
            click(xx, yy)
            //sleep(2000)
            console.log("已点击 所找图")

        } else {
            //console.log("没找到"+所找图)


        }
        大图.recycle()
        小图.recycle()


    }

    function 找图图(所找图) {

    


        let 大图 = captureScreen()
        //let 大图 = images.copy(大图1)
        let 小图 = images.fromBase64(所找图)

        let p = findImage(大图, 小图, {
            threshold: 0.8,
            region: [33, 330, 1030, 350]

        })

        if (p) {


            //console.log("找到"+ 小图 )
            let xx = p.x
            let yy = p.y
            click(xx, yy)
            //sleep(2000)
            console.log("已点击 所找图")

        } else {
            //console.log("没找到"+所找图)


        }
        大图.recycle()
        小图.recycle()


    }

    function 关闭右X(所找图) {
    


        let 右大X = captureScreen()
        //let 大图 = images.copy(大图1)
        let 右小X = images.fromBase64(所找图)

        let p = findImage(右大X, 右小X, {
            threshold: 0.75,
            region: [938, 100, 120, 150]
            //[949,711,120,120]

        })

        if (p) {


            //console.log("找到"+ 小图 )
            let xx = p.x
            let yy = p.y

            click(xx, yy)
            //sleep(2000)
            console.log("已点击关闭右X")

        } else {
            //console.log("没找到"+所找图)


        }
        右大X.recycle()
        右小X.recycle()


    }

    function 关闭中X左(所找图) {

        


        let 中X左大图 = captureScreen()
        //let 大图 = images.copy(大图1)
        let 中X左小图 = images.fromBase64(所找图)

        let p = findImage(中X左大图, 中X左小图, {
            threshold: 0.65,
            region: [53, 942, 120, 150]

        })

        if (p) {


            //console.log("找到"+ 小图 )
            let xxx = p.x
            let yyy = p.y

            click(xxx, yyy)
            //sleep(2000)
            console.log("已点击 关闭中X左")

        } else {
            //console.log("没找到"+所找图)


        }
        中X左大图.recycle()
        中X左小图.recycle()


    }


    function 关闭中X左(所找图) {
        


        let 中X左大图 = captureScreen()
        //let 大图 = images.copy(大图1)
        let 中X左小图 = images.fromBase64(所找图)

        let p = findImage(中X左大图, 中X左小图, {
            threshold: 0.65,
            region: [53, 942, 120, 150]

        })

        if (p) {


            //console.log("找到"+ 小图 )
            let xxx = p.x
            let yyy = p.y

            click(xxx, yyy)

            console.log("已点击 关闭中X左")

        } else {
            //console.log("没找到"+所找图)


        }
        中X左大图.recycle()
        中X左小图.recycle()


    }

    function 关闭中X左1(所找图) {

        


        let 中X左大图1 = captureScreen()
        //let 大图 = images.copy(大图1)
        let 中X左小图1 = images.fromBase64(所找图)

        let p = findImage(中X左大图1, 中X左小图1, {
            threshold: 0.6,
            region: [125, 81, 100, 100]

        })

        if (p) {


            //console.log("找到"+ 小图 )
            let xxx = p.x
            let yyy = p.y

            click(xxx, yyy)
            //sleep(2000)
            console.log("已点击 关闭中X左1")

        } else {
            //console.log("没找到"+所找图)


        }
        中X左大图1.recycle()
        中X左小图1.recycle()


    }

    function 关闭中X右(所找图) {

        


        let 中右大图 = captureScreen()
        //let 大图 = images.copy(大图1)
        let 中右小图 = images.fromBase64(所找图)

        let p = findImage(中右大图, 中右小图, {
            threshold: 0.7,
            region: [900, 350, 100, 500]

            //[918,366,100,100]

        })

        if (p) {


            //console.log("找到"+ 小图 )
            let xxx = p.x
            let yyy = p.y

            click(xxx, yyy)
            console.log("已点击 关闭中右")

        } else {
            //console.log("没找到"+所找图)


        }
        中右大图.recycle()
        中右小图.recycle()


    }

    function 关闭中下(所找图) {

    


        let 中下大图 = captureScreen()
        //let 大图 = images.copy(大图1)
        let 中下小图 = images.fromBase64(所找图)

        let p = findImage(中下大图, 中下小图, {
            threshold: 0.65,
            region: [487, 1812, 150, 150][843, 408, 200, 200]

        })

        if (p) {


            //console.log("找到"+ 小图 )
            let xxx = p.x
            let yyy = p.y

            click(xxx, yyy)

            console.log("已点击 关闭中下")

        } else {
            //console.log("没找到"+所找图)


        }
        中下大图.recycle()
        中下小图.recycle()


    }




    //base64模板


    g1 = ("/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABBADsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDRMlJ5nvUIfrS7s/8A1q8I+/JdxzUitn3qG3jnvLpba1iaSQnbkDIX61vjwbqIXL30Ct6LzQ72MKtelSkozkrmUrVLbgzXccSfM5P3RUl/pF7pKJJMouISeTFk4+tbXhy90Vr6JI7TZcEHbIxyKlO+zMauISpucFf0Mi/QQ6pNC/ysuMZqZdTvAoHm/pW54kvdHhutk9kJrj++vauSe4BclMqueFx0p3d9DPDT9tTTnEzZBJbybLmNoH6YcYpY45bqWOC35kkO1cc12ba74f1shL6zAmxtHmLz+BqAaTYWOsWN9aMUQswC9R0rL28NU9CljZKLVSDUrfI6jRdJtNI0821uvzsN0hJ5ZsVBFe2zxO14ptJUJBiY8kdjT4bpi8nUYOKx5l824j+1QO0shwN7ZLfjWcsQpRVtTxI03KTc3uatnPNLbyStbGFW+UKxzvX1rk9Y09ND1e3uLb5LZjklv4W+tdrYW04tX89XX5vlDnPFZniW1tbqG1trlN4MgOAcfrSjF03d7F4esoVbLZ7nIX9y+o6vPLaxtcF8YEY6cVeh8K6zLCruPKZuSmAcVpHxBoehny7a3HnYxiNefzrMl8bapJKzxrsQ9F3DitqdVS1SPS58U0lRjZLuc86Z3e3fFQTPewwrsllCMcxnd3q+lv8AaZvJ80Rbvl3ntXQ+IvD1tb+H9PkScBovlLE/6zNW1zLXU7p4iEJxhJbsn0jWrfWYIiJEhvogFMRbmT3rfjjnkdDLasWTkZFeRlGimEsTMjoflYHBq8viXX4xtGpSlffrXO6HvXRx1ssk5fumreZ61davaaVamXULiOHP3QzdfavIdf12fxBq5vE3xRquxEVuPrVK7mvdTkV7+5kuCDwHOQKfFBjtXS5OUeV7HRgcthhnzy1kSQR4GTyfU1Pz60KMdKKeqOxu5LLiRZE/vDFXb2++16Zp9mfu2oPfrVE/eNFJbGTpxbTfQYyBv/1VEYhU9JTNU2tiER4qQCnUn40IG2wpKWk4oYh5+8aUUUU+ghDRRRSGIaSiimgFFNPWiikUj//Z")

    g2 = ("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")

    g3 = ("/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABUAUkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2InmuN8Y+M20B0trVEe5YZ+bsK68nmuL8aeD5dcdLy0YC4VcYP8VfE0nHn949iiocy59jj/8AhY2tesf5Un/Cxda/6Z1TfwP4gjVmay4XkneK590aN2RhhlODXaoUnsenGnRl8KOs/wCFi616x/lR/wALF1r1jrndO0u71a5+z2cXmSYzjOK1/wDhBPEP/Pj/AOPim4UlowlCjF2Zb/4WLrXqn5Uf8LF1r1jqlJ4I1+KNpHssKoyfnFc+QVYqeo4oUKb2HGnSlsdb/wALG1r/AKZ/lV7TPiTqC3aJdxRvEzAEjqK4/TdKvNXnaGyh8yRRkjOK6fSfh7q0t6hvEW3iVgSd2c1M40orUipCjFWZ69BMs9ukyHKuuQakBqGCNbe3SFPuooUU/Nee2r6HlWJM0meD7U3NIT+NCeorHjvjLxRf3GsTW0U7xQRHAUd/rVDSPGWr6TOrfaGmi7xyHiu08XeBjqUsl/YECc8vH/erzC5tprSdobiNkkHVTXfT5JRserR9lOHLY9r0Hxlp2soqeYsVxjmNjXRhsj1r5tjkZHDoxVh0IOK9i8A61c6rpTJctueE7d3qKxrUuVXRy18Moao7HPFGabSZrluciRJmqOqataaRbefeSiNSeM96tZrzP4pSP51pFu+QjditKa5pWNaVPnmonYaP4x0vWLj7PBLibsp71y3xP1KaNbexjYqjfM2D96uG8OSNHr9oysVO8ciuq+J3/IQtf9yun2ajVSR1xoKnWVjmPDmoT2Ou2skTsNzhSM8c177uwoPTjNfO+k/8hez/AOuy/wA69t8S6h/Znh24n3Yby8DHrU4hLmSROLheUbHk/jHWJdV16b5z5MR2IuePernw9kuv+EjjSF3CEZkHbFco7mR2d+rHJq7per3WjzNNaPtdl2k10OPucqOyVL93yo+h/pRmvDv+E71zP/HxR/wneucH7RXK8PO5wfUp9z3AHJxXDeKfHv8AY96bOyiSWVR8xbpTPBnjO41m7NjeqokC5Vh/FXKeNfD99a61NcpBJLDMd4ZRnn0ohTSnaYUqCVTlqFv/AIWlq/8Az7W35Gl/4WlrH/PrbflXF/Y7r/n2l/74NL9juv8An2l/75NdXJT7Hb9Xo9js/wDhaWsf8+tt+VH/AAtPWP8An2tvyrimtbhF3PDIq+pWoqPZ0+wLD0n9lHdf8LS1j/n1tvyo/wCFpax/z6235VxCQyS/6tGc/wCyM1J9juv+faX/AL5NL2dPsL6vR7I7P/haesf8+tt+VJ/wtLWAf+Pa2/KuN+x3X/PtL/3yaPsd1/z7y/8AfBp8lPsH1ej2PWPC3jwa1eCzu4hFMRlSvQ122T/eNeP+BNAvJdZS8lhkigi53MMZNevb/wDZP5Vx1owUtDz8TCEZ2iMJ5o3CmE4qhPrWm2z7Jr2FX/ul+a5ldshRvsXLs/6HN/uN/Kvny8/4/p/9817bc+ItJe1lVb+AkqQPn9q8RuyGvJipBBc4Irtwqavc7sHFq9zqvhv/AMjOP+ubV6/kV4x4DvLex18S3EqxoI25Y16h/wAJJpH/AD/wf991niU3MzxMJOpcvaif+JdcY/uGvn2b/Xyf7xr22+8Q6VLZTIl9CWKHHzV4jL/rpO/zGtMLFpO5rhIuN7nafDL/AJDlz/1yFescCvHvh/e29hq08lzMsStHgFjXpi+ItJcgC/gyenz1niYyc9DLFQk53NbNJmokkSRA6OGU9weKwfGOrvpOgyywtiZvlSueMeaXKc0YOTsbv2+183yvPj8z+7u5rk/H3iObSLSG3tW2zTZO/wBBXlJvLlp/O8+TzOpbPNbviW/l1LTdHnn5kMLAn15rsjh1GSZ2QwqhNNlWy8UataXaSm+lkUMCyu3FeoT6Rp/i3RYLqSII8q7lkHUV4qeme9e4+Dz/AMUlp3/XOnibRSkisVFQtKOhwdx8NtTW5KQujxE/fPGBXoHhrQ4/D2meRvDOfmkY1sc1h+LZ7iDw5dPbZ8zGOPSud1pVPdZzSqzqpQbJ28U6Ql19nN5HvzjrWssiuoZDuB6Ed6+ci2SSScnvXo3gDxKWP9l3jkt1iLH9K0q4bljdM0q4XljdHpOa8x+KB/0uz/3K9Lzn615n8Tz/AKVZ/wC5WeG+NEYXSojj9CIGt2px/GK634mnN/a/7grkdF/5DNr/AL4rrPiWf9Ntf9wV2S/io7J/xYnHaWcatae0y/zrq/H+vm9u00+B8wxDL4PVq4uN3ikWRDh1OQfellkeaVndiWZtxNaOF5Js1lTUpJsZg5x3rdj8Ia1NGskdrlGAIOaws17j4TvDe+GrSUn5tuCKzr1HTV0Z16kqaujx3UtGvdJKi8i8sv0GapIpkdUUZZjgV2PxHuhNrscIbPlJgisHw3afbNftYSucvk1cZvk5mXCbcOaR3XgjwjdaddjUb4BXA/dpmu/cK6lWAI9CKavCBfQUteZUqucrnlTk5yuyP7Jbf88I/wAqT7Jbf88E/KpaKjmfcV33OX8bQQx+HJikSqfUCvGq9o8cf8i1NXi4r0cK7wuejhfgud58Mo45NRuhIgdRH35r037LbH/ljH+VeK+GvEA8PtdSiPfLIm1PrWlbfEbV0ug1xskhJ+4FwcVFajKcuZGVajOcuZHq/wBktv8Angn5Uv2S2/54p+VZuieIbLXLcSW8gDj70ZPIrWBzXHLmi7M5GpJ2YqhVGFGB7Cnbvb9aj60fjU6PcjlTM3X55YNFupIM+YqcV4RK7zSM8rszk8kmvoSRVkUo4BVhgg965O7+H+kXM7SIWh3HJC1vh68aatI7MPUjTVpHkgH50V6Ze/D7S7S0lm+0SfIpYcV5ocbjjoDXfTqxqfCdsKkZ/CJ1ox7V0PhPQYddvnind1RRniuy/wCFb6Z/z8S1M8RCD5ZEzrRjKzPLD/KivTrr4d6dDaySLcSllUkV5nIu2R1/ukiqp1Y1F7pVOpGew3gnFA4I6gj0re8KaLDrmovbzuyqqbsrXbD4b6bu5nkwDUzxEKbtImdaMXqQ/DW+uJra4t5SWjjOUZqz/iXfeZeW1mp+4NzCu60/S7PRbTyrZAiDlj3NePeJL86jr1zNnIDbF+grnpWqVXNHPSSnU5kZKjcwGDycV0/iuz+wafosGOkBP5msvw7YtqGuW0IGV3At9K6b4lKEvNPQdFiIH510zn+9UTecv3iSOF7V7f4QP/FKaf8A9c68QNe2+Ef+RW0//rnWGM+BGeL+FG7mo54kuIWhddyuNpFOzWZqWvafpJAu5wrnkL3rz4czehwqLb0PIvEmkPo+sSwlSImO5D2xWba3MlpcpPExDowIIr03xHDZeK9HNzp8oknt/mAHUjvXlpUo21wQw4Ir16UueNpbnp0p88bPc930HVF1XSIbpSN5XDD0NcP8Tz/pdr/uVb+GouFs7reCIi425qn8Tf8Aj6tf92uSEVHEWRy04qNY5DRP+Q1an/bFdX8Sub21/wBwVxljc/ZLuKfbnyznHrWj4g8QS69cpJJEsYQYAWuuUW6iZ1yheomZtnEJ72CE5Cu4Brt2+G0zXIKXK/Z25561xemf8hW1/wCuq/zr3uPmJfpWOJqyg1YyxE5QtY8E1GyewvprZuTGxH1ruPh1q4iiurOV8Ko3rnsMVU+ImktBfpqEa/JLwxHY1x0FzLbMzQuVLDacela/xaepdlVhqW9cvzqWs3VyR99yB9K6H4dWjTa602OIkyDXGkkn1Neu+A9N+w6Gszrh5zuz3xU15clOwqz5KfKdbS5pmfejNeTc86w/NGajzS5ouFjn/G//ACLc9eL17N41/wCRcnrxmvTwj9w78MvcNTSNFn1hLj7Py8K79vrWdLFJDK0cqlHU/MDXb/DTH9o3X/XOuo8S+EbXWo2miAiugOGHeqliFCpysbr8s7M8lsr650+4We2laORT2r1Hwz43h1MLbXpWG56A54avML/T7nTbloLmMo6n8DVZXaNgy5DLyPY1pOlGrG5dSlGoro+iQwIHpRu96xvDd3Ld6FbSzcsVwc961ua8iV4Ox5ko2dhpPNJn3ppPNZus6zb6NZNcTnJ6IvdjUJOTsjRRvoZHjrVhZaK0CNiabgD2ryb9a0NY1afWL5rmZj/sr2UVUggkup0hiGXcgACvZo0vZQszvpQ5InoHw3tXWO5uWHysQFrv81kaBpw0rSIbbGGxuf61qZryq9Tnm2cdR3lcivj/AKDP/uGvBpv+PiT/AHjXu98f9CmH+wa8Im/18n++a7MD8LN8Nomdb8Oj/wATyX/rnXqma8r+Hn/Ibl/6516lWGN/iGddXmJKvmROh6MCteMa5oN9p+pShoGKM5KMOc17RmmsEf7yhvqKijiHSZNObg9DhvAWgz2jvf3UZRmG1AeuKp/Ez/j/ALH/AK5n+dejDAHFed/EqItPZy9gpWtqFV1K6ky4Scql2cGa9p8J/wDIr6f/ANc68V6iut0XxxcaVYpaPAJI04U9xXViacqkEom9eDktD1Zm2ruJwAM14h4ivHvtcupHfeA5VP8Adrob/wCIVzcWzxQQrGXGNxrjGYuxJ5Y8k1GFoSpu8iaFNwd2b3g6eaLxBAkTHDnDL2Ir0a78IaRd3XnyW4Dk5bH8VcL8P7Tzdd+0EZWJDmvVs1ji6jjO0TOu2p6Edraw2UCw28apGowFFef/ABKybq1/3a9EzWH4k8Ppr9qke/ZIhyrVhQqJVFKTM6btO7PGaXHfGBXo2n/DuGGbfez+Yo/hXpWV48tILOe2ht4ljQL0WvTjiYSnaJ1+1Tdkcvpn/IUtf+uq/wA694jP7sfQV4Rpv/IUtf8Arqv869g1fxBZ6LaB5nBkx8sfc1zYyLk4qJliYtyViLxalrLoM63cioAMoT/erxnGDjrWxrviG61y53ykrEv3Ix0rICljgDP0rfD0nShZmtGDgtSazERvIhMcR7huNe62MsL2cJtmDR7cKV6V4J07VvaB4pu9Ek2E+ZbnqhPT6UsTRdRaE1qTkj2XNGazdK1m21i0E9u+R/Evdav5ryWnF2Zx8ttGPzRmm5ozU3FYwfGn/IuTV43XsHjU/wDFOzV4/Xq4LWmduH0idz8Nf+Qjdf8AXOvS815n8N/+Qhdf9c69KzXJi3+9OesvfMzWtBtNatvLuFww+646rXJw/DgLdZlucw+g6mu/3UZFZwxE4q1yVOSVhlvAlrbpBENqIAoAqXc3tTc+9Jmsr3d2Ry3Gk815x8RUuPtsMhDfZ9uM9ga9EJ5qvd2lvewmK4iWRD2NVQqqnPmZrD3Xc8NRGldUQFmY8AV6P4R8KGyKX16v78/cQ/w1uWXhvS7GbzYrcFs5Ge1a+TXTXxvOrRNalVy0Q/NGaZmkzXDcwsNuR5ltInqpFeGXUbx3kyOuGDng17tmsfUPDWl6jN500GH7leM11YXExpNqRtSnyHIfDq3c6lPPtPlhMbvevSs1TsrK20+3ENtEI0HYd6sZrKvW9rO5E3zO5JmjNMzRmsbk2H5rF8SaMutaa0I4mT5oz71r5ozVQm4y5kCundHiN5o9/YzNFNbSAr6DIqmY3H8LflXu7xRyDDoreuRVY6XYHk2cOe/y16Ecw0s0dCrs8R8tz0Vs/SrVrpd7eSBIbaRiT1xXsg0uwU5FnED/ALtWI4o4hiNFQewpvMFbRA677GP4W0P+xLAq+PPk5c/0rfzTM0ZrzpzcpXZg7t3H5ozTM0m6puKw/Nec/Eb/AI/bc/7NeiZrH1/QINdtgjnZIv3H9K3w9RQqJy2Lpvllc8k07f8A2hblF3MJFIA+tTazdXF1qtw9wSXDlcHsPSvQdE8FQaXdLczTefIv3eMCptY8G2WqXP2hCYZG+/jo1eg8ZS5zd1Y81zyyGGS4lWKJC7scACvSvCvhFLFFu79A1w3RD0StXSPDdho43RR75f77cmtmufEYzm92BnUqOWxwHirweylr7Tl3A8tGO1cIVKnaRhh1r3rr1wRXP6j4P0vUJzM0Zjc8nYcU8PjVFWqDp1bKzOW+HbyjVZlUnZs+avTM1maXo9no8RS1jwT1Y9TWjmubEVVUnzRMpvmlcfmkzTc0ZrC5NjD8Yq0vh6fb/Dya8f7V7vNGk8LQyLlGGCDXFXPw7jkuS8F35cZP3Cua9HCYmEI2kb0pqKsyv8OY3F1cy7fk2Yz716JmszR9It9Gs1ggGe7N6mtHNcuIqqc7oym+aVx+aM0zNGawuTYfmjNMzRmi4WG96MUUVLKQYoxRRQgDFGKKKGAYpcUUUgExS4oopoBMUYoooYBijFFFCAMUYoooYBijFFFCAMUYoooYBilxRRSATFGKKKaAMUYoooYBijFFFCAMUYoooYC4pMUUUIAxRiiihgLikxRRSAMUYoooAMUYoooAMUYoooA//9k=")

    广告右X1 = ("/9j/4AAQSkZJRgABAQAAAQABAAD/4QAwRXhpZgAATU0AKgAAAAgAAQExAAIAAAAOAAAAGgAAAAB3d3cubWVpdHUuY29tAP/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABYAFwMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOp8CeOPDv7YHgeLwJ42mh0/x5YxbdL1h8A3BA4Rj3NfVVKc8JP2kPhPmKdSOKhyT3PnC/8AgL4x0r4k/wDCDyaTO+stN5caqhKuufv59K9JYmDh7S5wSw8+flsfTt/4k8NfsM+FYtI0ZbbXfiVfBGvrg4ZbVeCUHv2ry1CeOld6RPR5oYSNlqz4/wDAWga74l8WadY+GY55dZklXyDBncjZ65HQCvYqyjGLczyacZSkuU/UnTvEdrp2lWPg3U/EOln4ynSzFFqDIpZGI4Qt618o4ty50vcufTKUVHkb94/Mf4seF/E/hbx3qln4uWb+2vOZpZpsnzcn7wPpX1NCUJQTgfN1ozjN859bz6dpv7EnwYstc0+0XVvHHiCHEepFR5dorD+HPOefSvIu8ZVcXsj1bLC07rdnxdeeL9ZvvEzeIJtQnbWHm883W87w2c8GvaVOKjyWPI9pLm5up9u/DOLTf25/h7/Zfia2Nl4u0LYq63GB+/jBAw/fOK8OrfBTvDZns07YuFpbo//Z")
    广告右X2 = ("/9j/4AAQSkZJRgABAQAAAQABAAD/4QAwRXhpZgAATU0AKgAAAAgAAQExAAIAAAAOAAAAGgAAAAB3d3cubWVpdHUuY29tAP/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABUAFQMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/ANP4k/DTxt/wT++KKeNfBTXGp+ALyU/aLXllRSclHH8jWqfMrMjZn2Bb/tq/Dyf4JN8Rf7SjWBI8NpxYeeJsf6vb1696jldyrnwfq3h743ft169qHjbS1udL0O3f7PYweYY0CHJ+X16DJrTRaE3P0e/aO+Ifgr4ffC7V7nxuILjTJoWjFjLgtcMRwqj196yV2Uz8ZG8G6rNBL44i8Maivw5Go7jDz5ezdnb6dO9dGmxB+yP7NXxM8B+PPhTpFz4KNtp+mW8SxNYKQjW745Vh6+9YNNPUtNH51+HdV1L9uv8AakXTfGt/LZ6HYyv5Wm2p3RhFb7vbr3OK0+FaE3ufqMnww8MR+BB4NXSLYeHfI+z/AGLYNu3GM/X3rG5R+QP7TvhC9/ZZ+Lmq+H/BPiC+stKu8XHkKxUJ1wODzjJrePvLUhrU/9k=")

    广告中左1 = ("/9j/4AAQSkZJRgABAQAAAQABAAD/4QAwRXhpZgAATU0AKgAAAAgAAQExAAIAAAAOAAAAGgAAAAB3d3cubWVpdHUuY29tAP/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABIAEwMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AK/gvxp8QP8AgmV8YG8K+KluNf8AhZq8xkhniUlGTP8Ar4eyyqMb4+/UdjQB7B+15/wUGtn0mw8D/BO8PiDxR4gijX+1NPUyG1SUDbHEO87A/wDAOp5oA808H/8ABI/xD4j8NWGq+KPG40nxBep595ZLb+eYXYk7WkJ+ZsEZPrmgDt/+CkX7S3h7xNYj4KeGNGt/GXiu7uY1nlSPzv7PlyNqQ45M56HHCgnPXFAHzp8K7LxL/wAE9Pjt4e1r4m+CobvTtTtAFvEUTNbK+C7QP0EqdGXqRnHWgD9e/Cnjzw/438Oadr2iavaahpOoQie3uYpRtdT/ACPYjsQaAPyg/wCCU1nBrX7SOq3uoQR395DpMlxHcXKCSRJWcbnDNkhjk5I5OaAPuL/go9plnf8A7Jvi6a5tILiW18qW3kljVmhfeBuQkfKcEjIoA/FODxXremRLbWesahaWyZ2wwXToi5OTgA4GSSfxoA//2Q==")

    // 跳过左上1=("")

    // 跳过左上2=("")

    广告中左2 = ("/9j/4AAQSkZJRgABAQAAAQABAAD/4QAwRXhpZgAATU0AKgAAAAgAAQExAAIAAAAOAAAAGgAAAAB3d3cubWVpdHUuY29tAP/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAB0AGQMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0B0vVbv4Z6jDoutTvc6BO2zT9Uk5MJ7Qyn+RoA9BnnitoHmmkSOBF3tIxwqr6k0AedD7T8Xb3/AJaWvgy3f3V9RcH9I/50Adh/whugf9AWy/78igC3rljp+paRdW+qJFJp7RnzvOOFC+ue2PWgDwywv5NRnsNJ1a/vD8PzdNHa3sqFftOD8kcj9dmeh70Ae+wQx20EcUCJFAihURBhQvYCgB9AHm+Ln4u3v/LS18GW7+6vqLg/pH/OgDur7Q7DUtJfS7i0ik0908v7PtwoXtj0x2oA4nS9Vu/hnqMOi61O9zoE7bNP1STkwntDKf5GgD0Lzov+esf/AH2KAEggjtoY4YY1ihjUKkaDAUDoAKAH0AVdV0q01zT5rG+gW5tZl2vG44Pv9fegDgf+GfNH/wCgrqn/AIEGgD//2Q==")

    广告中右1 = ("/9j/4AAQSkZJRgABAQAAAQABAAD/4QAwRXhpZgAATU0AKgAAAAgAAQExAAIAAAAOAAAAGgAAAAB3d3cubWVpdHUuY29tAP/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABQAEwMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AMDRda8If8FOPhzHoWuy2fhf9oPQbb/QtQOEj1pFHQ+ue46qeRxU7j2Pnj4D/sLePfir8WtV8KeIbGbwjpHh2U/8JFq14Nkdqg5IRjwzMBkHpjk0WHc+sZf26P2aPge58B+HPhsviXRtB/0ODV1gjcXZHLybmGWy5bnvQKx8g/sXfs4eMfjn8TbTVdC1CbwroXh6ZbvUfFat5YsgvzYRjwXIB46AdaQ2foh8RfjN4M/bf8J+N/gt8OvHtxofi+yVVgv5GWOPxEI1w67hgspIwcfXpVbiPyN8X/DTxR8PvE2o+HNc0C+sdW02YwXEAgZgrD0IGCCMEH0NSM/Qr/gpDrVx+zR8JfAnwf8AhyE8NeDtUtjJqAtQRc3ZA5EkmeQx5PHP04pvsJH5vaHr+o+ENXstZ0W8m0zVdPkE9rd2zbXiccgg0hn7t/s8fE68+KvwT8H+K/E2j6LqOu6lYLJd3b2I3SspKbjz1woqkSf/2Q==")

    中下 = ("/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAdABoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDT0/UNB+N/hb+ztQ2WviC2TKsBzn1HqPavCPEXhfU/DOtyaXqFuyzBsIQOJB2K1T0jUr/SdTt73TpZIrqNgYynUn096+vtCsk8U6Ho+reKNIgj1SMB0VxyD6//AFqAPLfh58PNP8JaSfGXjIpF5a+ZBbyD7voSO59qJ/2i2FxIINK/chzsyedueP0rlfjP4j8Q6h4ol03U4JLSyt2/0eEfddf73vXmH40Ae8/Dz4eaf4T0k+MfGJSLy18yC3k/h9CR3PtXFeMfizrXiDxJHfWE8lnaWj5tYlP6t6034q+NtT8S+I7ixmPk2NnIUjgRjg+59TXnjdcUAfSOnajoPxv8KnTtQ2W3iC2TKN3z/eHqPavLZ/g54yhuJYl05ZFRyocNw2D1rjNL1W80XUYb+wneG4ibKupr36y+NerSWFu76dbs7RKWO88nH0oA/9k=")


    while (true) {



        关闭右X(广告右X1)
        关闭右X(广告右X2)
        关闭中X左(广告中左1)
        关闭中X左1(广告中左2)
        关闭中X右(广告中右1)
        关闭中下(中下)
        // 跳过左上(跳过左上2)
        //找图(未解锁)
        //找图(气泡)
        找图(g1)
        找图(g2)
        找图(g3)














        检测当前()
        广告关闭()



        // var 时间结束 = new Date().getTime()
        // var 时间间隔 = Math.floor((时间结束 - 时间开始) / 1000);
        // if (时间间隔 >= Runningtime1.toString() * 60) {
        //     console.info("定时时间已到")
        //     sleep(1000)
        //     //关闭应用()
        //     console.info("当前平台运行结束，即将开始下一个平台~~")
        //     break
        // }
    }





    function 广告关闭() {










        //以下为常用
        let 禁止 = text("禁止").findOnce()
        if (禁止) {
            禁止.click();
            console.log("关闭禁止")

        }

        let 点击立即下载 = text("点击立即下载").className("android.view.View").findOnce()
        if (点击立即下载) {
            sleep(200 + random(100, 500))
            press(583, 1236, 200);
            console.log("点击立即下载")

        }

        let 无法关闭 = text("无法关闭").findOnce()
        if (无法关闭) {
            sleep(200 + random(100, 500))
            无法关闭.click();
            console.log("无法关闭")

        }
        let 拒绝安装 = text("拒绝").findOnce()
        if (拒绝安装) {
            sleep(200 + random(100, 500))
            拒绝安装.click();
            console.log("拒绝安装")

        }
        let 放弃 = text("放弃奖励离开").findOnce()
        if (放弃) {
            sleep(200 + random(100, 500))
            放弃.click();
            console.log("放弃奖励离开")

        }
        let 残忍离开 = text("残忍离开").className("android.widget.TextView").findOnce()
        if (残忍离开) {
            残忍离开.click();
            console.log("残忍离开")

        }
        let 放弃下载 = text("放弃下载").className("android.widget.TextView").findOnce()
        if (放弃下载) {
            放弃下载.click();
            console.log("放弃下载")


        }

        let 取消 = text("取消").findOnce()
        if (取消) {
            sleep(200 + random(100, 500))
            取消.click();
            console.log("关闭取消")

        }
        let 放弃福利 = text("放弃福利").findOnce()
        if (放弃福利) {

            press(500, 1560, 200);;
            console.log("放弃福利")

        }







    }




//}