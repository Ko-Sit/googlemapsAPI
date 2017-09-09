// имя | долгота | широта | хз | количество | активы
var data = [
    ['Evroopt', 55.1092859, 82.9486227, 1, 1, [0, 0, 1]],
['Evroopt', 53.9173465, 27.4296282, 2, 2, [1, 0, 1]],
['Evroopt', 53.85553245, 27.5111398233851, 3, 2, [1, 1, 0]],
['Evroopt', 53.8581714, 27.4329314, 6, 1, [0, 1, 0]],
['Evroopt', 53.9474229, 27.6827577, 7, 1, [1, 0, 0]],
['Evroopt', 54.3245586, 26.8396206009333, 9, 2, [1, 1, 0]],
['Evroopt', 52.8087004, 28.0298727, 10, 3, [1, 1, 1]],
['Evroopt', 53.8659382, 27.609139761438, 11, 2, [0, 1, 1]],
['Evroopt', 52.1852302, 25.1187116, 14, 0, [0, 0, 0]],
['Evroopt', 53.91135, 27.48668, 15, 2, [1, 0, 1]],
['Evroopt', 53.8834451, 27.6815164, 16, 1, [0, 0, 1]],
['Evroopt', 53.8975401, 27.4937814006999, 18, 1, [1, 0, 0]],
['Evroopt', 53.8999645, 27.4413089, 19, 2, [1, 0, 1]],
['Evroopt', 53.91125045, 27.5023172549801, 20, 3, [1, 1, 1]],
['Evroopt', 53.879877, 27.6360709, 21, 1, [0, 1, 0]],
['Evroopt', 53.8995681, 27.5753446, 22, 2, [1, 0, 1]],
['Evroopt', 53.9116667, 27.5137115, 23, 3, [1, 1, 1]],
['Evroopt', 54.0147634, 27.4254139, 24, 1, [1, 0, 0]],
['Evroopt', 53.9052269, 27.5380563, 25, 3, [1, 1, 1]],
['Evroopt', 54.0928127, 26.508113, 26, 0, [0, 0, 0]],
['Evroopt', 53.8505359, 27.700269, 28, 1, [0, 0, 1]],
['Evroopt', 53.8781551, 27.5473573, 29, 1, [0, 0, 1]],
['Evroopt', 53.7450985, 27.6862405, 30, 0, [0, 0, 0]],
['Evroopt', 53.7892653, 27.5873203, 31, 1, [1, 0, 0]],
['Evroopt', 53.8458095, 27.6416996650756, 32, 0, [0, 0, 0]],
['Evroopt', 54.324513, 26.8394665, 33, 2, [1, 0, 1]],
['Evroopt', 54.3254754, 26.88291, 35, 3, [1, 1, 1]],
['Evroopt', 53.90346465, 27.4561184566654, 36, 2, [0, 1, 1]],
['Evroopt', 53.8786949, 27.4544787, 37, 2, [1, 0, 1]],
['Evroopt', 53.9116372, 27.4349498, 38, 3, [1, 1, 1]],
['Evroopt', 53.927566, 27.4330117, 39, 1, [1, 0, 0]],
['Evroopt', 53.8716566, 27.5726262, 44, 1, [0, 1, 0]],
['Evroopt', 53.9280835, 27.3198283, 45, 2, [1, 0, 1]],
['Evroopt', 53.8761318, 27.9038583, 46, 1, [0, 0, 1]],
['Evroopt', 53.2131507, 26.7043146, 47, 2, [0, 1, 1]],
['Evroopt', 54.3075671, 26.8378514334913, 48, 1, [1, 0, 0]],
['Evroopt', 53.9044583, 27.6132738325458, 50, 2, [1, 1, 0]],
['Evroopt', 53.9160544, 27.4582323781105, 51, 2, [1, 0, 1]],
['Evroopt', 53.930782, 27.5429301840355, 52, 1, [0, 1, 0]],
['Evroopt', 53.896465, 27.4222143373476, 54, 2, [1, 0, 1]],
['Evroopt', 53.9176501, 27.4494327, 56, 2, [1, 0, 1]],
['Evroopt', 53.84564605, 27.45569195, 57, 0, [0, 0, 0]],
['Evroopt', 53.867604, 27.6719960674354, 59, 2, [0, 1, 1]],
['Evroopt', 53.9204502, 27.4930088, 62, 2, [1, 0, 1]]
];
var lastDataId, lastMarker;

function loadinfo(id, mrk) {
    document.getElementById("checkBox1").checked = data[id][5][0];
    document.getElementById("checkBox2").checked = data[id][5][1];
    document.getElementById("checkBox3").checked = data[id][5][2];
    lastDataId = id;
    lastMarker = mrk;
}

function updateMarker() {
    data[lastDataId][4] = data[lastDataId][5].reduce(function (previousValue, value) {
        return previousValue + value;
    })
    lastMarker.setIcon(iconsMap.get(data[lastDataId][4]))
}

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: new google.maps.LatLng(53.901226, 27.555596),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var iconsMap = new Map();
iconsMap.set(0, 'http://maps.google.com/mapfiles/ms/icons/red-dot.png');
iconsMap.set(1, 'http://maps.google.com/mapfiles/ms/icons/red-dot.png');
iconsMap.set(2, 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
iconsMap.set(3, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png');

var marker, i;

for (i = 0; i < data.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(data[i][1], data[i][2]),
        map: map,
        icon: iconsMap.get(data[i][4])
    })
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(data[i][0]);
            infowindow.open(map, marker);
            loadinfo(i, marker);
        }
    })(marker, i));
}

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[name=checkBox1]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {
            data[lastDataId][5][0] = 1
        }
        else {
            data[lastDataId][5][0] = 0
        }
        updateMarker();
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[name=checkBox2]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {
            data[lastDataId][5][1] = 1
        }
        else {
            data[lastDataId][5][1] = 0
        }
        updateMarker();
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[name=checkBox3]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {
            data[lastDataId][5][2] = 1
        }
        else {
            data[lastDataId][5][2] = 0
        }
        updateMarker();
    });
});
