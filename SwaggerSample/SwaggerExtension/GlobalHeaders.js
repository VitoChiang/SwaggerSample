$('#input_apiKey').hide();

// 加上 Header 區塊
var HeaderBar = $('<div id="headerbar">' +
    '<h2 class="heading">Header</h2>' +
    '<table style="background-color:#E8E8D0"><thead><tr>' +
    '<th style="width: 100px; max-width: 100px" data-sw-translate="">Parameter</th>' +
    '<th style="width: 310px; max-width: 310px" data-sw-translate="">Value</th>' +
    '<th style="width: 200px; max-width: 200px" data-sw-translate="">Description</th>' +
    '</tr></thead>' +
    '<tbody class="operation-params">' +
    '<tr>' +
    '<td class="code required"><label for="custom_ApiToken">ApiToken</label></td>' +
    '<td><input class="parameter required" minlength="1" name="custom_ApiToken" placeholder="(required)" id="ApiToken" type="text" value=""></td>' +
    '<td class="markdown"><p>ApiToken</p></td>' +
    '</tr>' +
    '<tr>' +
    '<td class="code required"><label for="custom_ClientId">ClientId</label></td>' +
    '<td><input class="parameter required" minlength="1" name="custom_ClientId" placeholder="(required)" id="ClientId" type="text" value=""></td>' +
    '<td class="markdown"><p>ClientId</p></td>' +
    '</tr>' +
    '</tbody></table>' +
    '</div>');
$('#resources_container').before(HeaderBar);

// 把值加到 Header
$('#ApiToken').on('change', function () {
    var key = this.value;
    if (key && key.trim() !== '') {
        //client.clientAuthorizations.add('my_header_auth', new ApiKeyAuthorization('My-Header', 'bar', 'header'))
        swaggerUi.api.clientAuthorizations.add("Authorization", new SwaggerClient.ApiKeyAuthorization("Authorization", "Bearer " + key, "header"));
    }
});

$('#ClientId').on('change', function () {
    var key = this.value;
    if (key && key.trim() !== '') {
        //client.clientAuthorizations.add('my_header_auth', new ApiKeyAuthorization('My-Header', 'bar', 'header'))
        swaggerUi.api.clientAuthorizations.add("ClientId", new SwaggerClient.ApiKeyAuthorization("ClientId", key, "header"));
    }
});
swaggerUi.api.clientAuthorizations.add("x-Swagger", new SwaggerClient.ApiKeyAuthorization("x-Swagger", "true", "header"));