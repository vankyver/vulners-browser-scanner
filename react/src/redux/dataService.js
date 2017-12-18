import {v_browser} from '../Browser';

// const sendMessage = (message, callback) => {
//     v_browser.tabs.getSelected(tab => {
//         v_browser.runtime.sendMessage(Object.assign(message, {tab_id: tab.id}), callback)
//     });
// };

export default store => next => action => {

    next(action);

    // switch (action.type) {
    //
    //     case 'LOAD_DATA':
    //         return sendMessage({action: 'show_vulnerabilities'}, (vulners) => {
    //             next({
    //                 type: 'LOAD_DATA_RECEIVED',
    //                 ...vulners
    //             })
    //         });
    //
    //     case 'CHANGE_SETTINGS':
    //         return sendMessage({action: 'change_settings', settings: action.settings});
    //
    // }

    switch (action.type) {

        case 'LOAD_DATA':
            let data = {"www.cvedetails.com":{"software":{"PHP":{"score":7.5,"scoreColor":"#00e676","vulnerabilities":[{"id":"PHP_5_4_45.NASL","type":"nessus","title":"PHP 5.4.x < 5.4.45 Multiple Vulnerabilities","score":7.5,"scoreColor":"#f57c00","description":"According to its banner, the version of PHP running on the remote web server is 5.4.x prior to 5.4.45. It is, therefore, affected by the following vulnerabilities :\n\n  - Multiple use-after-free memory errors exist related to     the unserialize() function. A remote attacker can     exploit these errors to execute arbitrary code.\n    (CVE-2015-6834)\n\n  - A use-after-free memory error exists related to the     php_var_unserialize() function. A remote attacker, using     a crafted serialize string, can exploit this to execute     arbitrary code. (CVE-2015-6835)\n\n  - A type confusion error exists related to the     serialize_function_call() function due to improper     validation of the headers field. A remote attacker can     exploit this to have unspecified impact. (CVE-2015-6836)\n\n  - Multiple flaws exist in the XSLTProcessor class due to     improper validation of input from the libxslt library. A     remote attacker can exploit thse flaws to have an     unspecified impact. (CVE-2015-6837, CVE-2015-6838)\n\n  - A flaw exists in the php_zip_extract_file() function     in file php_zip.c due to improper sanitization of     user-supplied input. An unauthenticated, remote attacker     can exploit this to create arbitrary directories outside     of the restricted path. (VulnDB 127122)\n\nNote that Nessus has not tested for these issues but has instead relied only on the application's self-reported version number."},{"id":"CVE-2015-8994","type":"cve","title":"An issue was discovered in PHP 5.x and 7.x, when the configuration uses apache2handler/mod_php or php-fpm with OpCache enabled. With 5.x after 5.6.28 or 7.x after 7.0.13, the issue is resolved in a non-default configuration with the opcache.validate_permission=1 setting. The vulnerability details are as follows. In PHP SAPIs where PHP interpreters share a common parent process, Zend OpCache creates a shared memory object owned by the common parent during initialization. Child PHP processes inherit the SHM descriptor, using it to cache and retrieve compiled script bytecode (\"opcode\" in PHP jargon). Cache keys vary depending on configuration, but filename is a central key component, and compiled opcode can generally be run if a script's filename is known or can be guessed. Many common shared-hosting configurations change EUID in child processes to enforce privilege separation among hosted users (for example using mod_ruid2 for the Apache HTTP Server, or php-fpm user settings). In these scenarios, the default Zend OpCache behavior defeats script file permissions by sharing a single SHM cache among all child PHP processes. PHP scripts often contain sensitive information: Think of CMS configurations where reading or running another user's script usually means gaining privileges to the CMS database.","score":6.8,"scoreColor":"#ff9800","description":"An issue was discovered in PHP 5.x and 7.x, when the configuration uses apache2handler/mod_php or php-fpm with OpCache enabled. With 5.x after 5.6.28 or 7.x after 7.0.13, the issue is resolved in a non-default configuration with the opcache.validate_permission=1 setting. The vulnerability details are as follows. In PHP SAPIs where PHP interpreters share a common parent process, Zend OpCache creates a shared memory object owned by the common parent during initialization. Child PHP processes inherit the SHM descriptor, using it to cache and retrieve compiled script bytecode (\"opcode\" in PHP jargon). Cache keys vary depending on configuration, but filename is a central key component, and compiled opcode can generally be run if a script's filename is known or can be guessed. Many common shared-hosting configurations change EUID in child processes to enforce privilege separation among hosted users (for example using mod_ruid2 for the Apache HTTP Server, or php-fpm user settings). In these scenarios, the default Zend OpCache behavior defeats script file permissions by sharing a single SHM cache among all child PHP processes. PHP scripts often contain sensitive information: Think of CMS configurations where reading or running another user's script usually means gaining privileges to the CMS database."},{"id":"CVE-2017-16642","type":"cve","title":"In PHP before 5.6.32, 7.x before 7.0.25, and 7.1.x before 7.1.11, an error in the date extension's timelib_meridian handling of 'front of' and 'back of' directives could be used by attackers able to supply date strings to leak information from the interpreter, related to ext/date/lib/parse_date.c out-of-bounds reads affecting the php_parse_date function. NOTE: this is a different issue than CVE-2017-11145.","score":5,"scoreColor":"#ffee58","description":"In PHP before 5.6.32, 7.x before 7.0.25, and 7.1.x before 7.1.11, an error in the date extension's timelib_meridian handling of 'front of' and 'back of' directives could be used by attackers able to supply date strings to leak information from the interpreter, related to ext/date/lib/parse_date.c out-of-bounds reads affecting the php_parse_date function. NOTE: this is a different issue than CVE-2017-11145."},{"id":"CVE-2016-7478","type":"cve","title":"Zend/zend_exceptions.c in PHP, possibly 5.x before 5.6.28 and 7.x before 7.0.13, allows remote attackers to cause a denial of service (infinite loop) via a crafted Exception object in serialized data, a related issue to CVE-2015-8876.","score":5,"scoreColor":"#ffee58","description":"Zend/zend_exceptions.c in PHP, possibly 5.x before 5.6.28 and 7.x before 7.0.13, allows remote attackers to cause a denial of service (infinite loop) via a crafted Exception object in serialized data, a related issue to CVE-2015-8876."},{"id":"CVE-2014-9767","type":"cve","title":"Directory traversal vulnerability in the ZipArchive::extractTo function in ext/zip/php_zip.c in PHP before 5.4.45, 5.5.x before 5.5.29, and 5.6.x before 5.6.13 and ext/zip/ext_zip.cpp in HHVM before 3.12.1 allows remote attackers to create arbitrary empty directories via a crafted ZIP archive.","score":4.3,"scoreColor":"#c6ff00","description":"Directory traversal vulnerability in the ZipArchive::extractTo function in ext/zip/php_zip.c in PHP before 5.4.45, 5.5.x before 5.5.29, and 5.6.x before 5.6.13 and ext/zip/ext_zip.cpp in HHVM before 3.12.1 allows remote attackers to create arbitrary empty directories via a crafted ZIP archive."}]}},"vulnerable":true},"vulners.com":{"software":{"Nginx, headers":{"score":0,"scoreColor":"#00e676","vulnerabilities":[]}},"vulnerable":false}}
            let vulners = {data, stat: {scanned: 2, vulnerable: 0}, url: 'www.cvedetails.com', settings: {showAllDomains:false,showOnlyVulnerable:true}};
            return next({
                type: 'LOAD_DATA_RECEIVED',
                data: Object.values(vulners.data)
            });

        case 'CHANGE_SETTINGS':
            console.log('[ACTION]', action);
            //return sendMessage({action: 'change_settings', settings: action.settings});
            return //next({type: 'CHANGE_SETTINGS'})

    }

};