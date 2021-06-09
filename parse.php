$otherPage = 'nasa';
$profileUrl = "https://www.instagram.com/ahmadtearussia/";

$iterationUrl = $profileUrl;
$tryNext = true;
$limit = 100;
$found = 0;
while ($tryNext) {
$tryNext = false;
$response = file_get_contents($iterationUrl);
if ($response === false) {
break;
}
$data = json_decode($response, true);
if ($data === null) {
break;
}
$media = $data['user']['media'];
$found += count($media['nodes']);
var_dump($media['nodes']);
if ($media['page_info']['has_next_page'] && $found < $limit) {
$iterationUrl = $profileUrl . '&max_id=' . $media['page_info']['end_cursor'];
$tryNext = true;
}
}