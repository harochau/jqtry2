

    let images = new Map();
    images.set("Красный костел", {
        title: "Красный костел",
        description: `В храме святого Симеона и святой Елены
находится полномасштабная копия Туринской Плащаницы.`,
        link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
        imagePath: "red.jpg",
        // imagePathMore: [red1.jpg, red2.jpg],
    })
    images.set("Троицкое предместье", {
        title: "Троицкое предместье",
        description: `Троицкое предместье — исторический район города Минска,
расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь.`,
        link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
        imagePath: "troi.jpg",
        // imagePathMore: [troi1.jpg, troi2.jpg],
    });
    images.set("Мирский замок", {
        title: "Мирский замок",
        description: `Построенный в начале XVI в. магнатом
Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Белоруссии`,
        link: "https://mirzamak.by/",
        imagePath: "mir.jpg",
        // imagePathMore: [mir.gif, mir1.jpg, mir2.jpg],

    });


    $(document).ready(function () {
        $("a").addClass("test");
        $("a").removeClass("test");
        $("#p1").append("<h2>what1</h2>");
        $("#p1").append("<h2>what2</h2>");
        $("#p1").append("<h2>what3</h2>");

        $("#p1 h2:first").clone().appendTo("#p1");
        let p1 = $("#p1").detach();
        p1.append("<h2>what4</h2>");
        $("body").append(p1);

        let las = $("#p1").children().last();
        las.data("source", images);
        images.set("Мирский замок", {
            title: "Мирский замок",
            description: `Построенный в начале XVI в. магнатом
Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Белоруссии`,
            link: "https://mirzamak.by/",
            imagePath: "mir2.jpg",
            // imagePathMore: [mir.gif, mir1.jpg, mir2.jpg],

        });

        console.log(las.data("source").get("Мирский замок"));


        // console.log($("h2").get(1));
        $("#a1").remove();
        // console.log($("a").attr("href"));
        $("a").attr("href", "allMyHrefsAreTheSameNow.html");
        // console.log($("a[ara='ja']").attr("href", "notthateasy.html"));
        $("a").click(function (event) {

            event.preventDefault();

            $(this).hide("fast");

        });
        $.each(["foo", "bar", "baz"], function (idx, val) {
            console.log("element " + idx + " is " + val);
        });

        $.each({ foo: "bar", baz: "bim" }, function (k, v) {
            console.log(k + " : " + v);
        });
        // var myArray = [1, 2, 3, 4, 5];
        let myArray = { first: 1, second: 4 };

        if ($.inArray(4, myArray) !== -1) {
            console.log("found it!");
        } else {
            console.log("can't find it!");
        }
        // Switching handlers using the `.one()` method
        $("h2").on("click", firstClick);
        function c2() {
            console.log("You have clicked this before!");
            $(this).off("click",c2);
            $(this).off("click",firstClick);
        }
        function firstClick() {
            console.log("You just clicked this for the first time!");

            // Now set up the new handler for subsequent clicks;
            // omit this step if no further click responses are needed
            $(this).click(c2);
        }

    });

