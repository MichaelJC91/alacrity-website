//Get height of 1st column
export default function colHeight() {
let colHeight = $('.contactFirstCol').height();
$('.googleMapWrapper').css('height', colHeight + 'px');
}
