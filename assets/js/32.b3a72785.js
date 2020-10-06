(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{374:function(e,t,o){"use strict";o.r(t);var s=o(34),n=Object(s.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#what-is-cloudlinux"}},[e._v("What is CloudLinux")])]),o("li",[o("a",{attrs:{href:"#cloudlinux-life-cycle"}},[e._v("CloudLinux life cycle")])]),o("li",[o("a",{attrs:{href:"#description-of-cloudlinux-components"}},[e._v("Description of CloudLinux components")])])])]),o("p"),e._v(" "),o("h3",{attrs:{id:"what-is-cloudlinux"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-cloudlinux","aria-hidden":"true"}},[e._v("#")]),e._v(" What is CloudLinux")]),e._v(" "),o("p",[e._v("CloudLinux is designed for shared hosting providers. It isolates each customer into a separate “Lightweight Virtualized Environment” (LVE), which allocates and limits server resources, like memory, CPU and the number of simultaneous connections, for each web hosting tenant. This ensures that tenants cannot jeopardize the stability of your servers, causing all sites to slow down or even come to a halt. CloudLinux OS also “cages” tenants from one another to avoid security breaches. This way, unstable scripts or malware are not able to sprawl across your customer sites, causing severe harm.")]),e._v(" "),o("h3",{attrs:{id:"cloudlinux-life-cycle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cloudlinux-life-cycle","aria-hidden":"true"}},[e._v("#")]),e._v(" CloudLinux life cycle")]),e._v(" "),o("p",[e._v("CloudLinux supports the same life cycle policy as RHEL. Using a supported operating system is critical to maintaining a stable server environment.")]),e._v(" "),o("p",[e._v("Currently, the following version are supported:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th"),e._v(" "),o("th"),e._v(" "),o("th")])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Operating System")]),e._v(" "),o("td",[e._v("Release Date")]),e._v(" "),o("td",[e._v("End of Life and Support")])]),e._v(" "),o("tr",[o("td",[e._v("CloudLinux 8")]),e._v(" "),o("td",[e._v("Mar 17, 2020")]),e._v(" "),o("td",[e._v("May 31, 2029")])]),e._v(" "),o("tr",[o("td",[e._v("CloudLinux 7")]),e._v(" "),o("td",[e._v("Apr 1, 2015")]),e._v(" "),o("td",[e._v("Jun 30, 2024")])]),e._v(" "),o("tr",[o("td",[e._v("CloudLinux 6")]),e._v(" "),o("td",[e._v("Feb 1, 2011")]),e._v(" "),o("td",[e._v("Nov 30, 2020 ("),o("a",{attrs:{href:"https://www.cloudlinux.com/extended-support-cloudlinux-os-6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Extended Support until June 30, 2024"),o("OutboundLink")],1),e._v(")")])])])]),e._v(" "),o("h3",{attrs:{id:"description-of-cloudlinux-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#description-of-cloudlinux-components","aria-hidden":"true"}},[e._v("#")]),e._v(" Description of CloudLinux components")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("LVE Manager")])]),e._v(" "),o("p",[e._v("LVE is a Lightweight Virtualized Environment.\nLVE Manager allows you to maintain fine-tuned control over your resources, including CPU, IO rate, memory, inodes, numbers of processes, and concurrent connections, that any single account can use. Now you can limit resource abuse, while allowing good customers to use what they need.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/lve_manager/"}},[e._v("See more")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("CageFS")])]),e._v(" "),o("p",[e._v("CageFS is a virtualized, per-user file system that uniquely encapsulates each customer, preventing users from seeing each other and viewing sensitive information. CageFS prevents a large number of attacks, including most privilege escalation and information disclosure attacks. It is completely transparent to your customers, without any need for them to change their scripts.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/cloudlinux_os_components/#cagefs"}},[e._v("See more")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("MySQL Governor")])]),e._v(" "),o("p",[e._v("MySQL Governor tracks CPU and disk IO usage for every user in real time and throttles MySQL queries by using LVE limits. By using the "),o("RouterLink",{attrs:{to:"/command-line_tools/#dbtop"}},[e._v("dbtop")]),e._v(" utility, it is possible to see the database usage on a per-customer basis, ensuring that the system admin always know what is going on.")],1),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/cloudlinux_os_components/#mysql-governor"}},[e._v("See more")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("PHP Selector")])]),e._v(" "),o("p",[e._v("PHP Selector allows end users to select the specific version of PHP they need. It allows ultimate flexibility by offering all popular versions of PHP, with more than 120 PHP extensions to choose from.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/cloudlinux_os_components/#php-selector"}},[e._v("See more")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Ruby Selector")])]),e._v(" "),o("p",[e._v("Ruby Selector allows end users to choose the Ruby version for applications and install additional modules to the application environment. Ruby Selector uses "),o("code",[e._v("mod_passenger")]),e._v(" for delivering optimum performance.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/cloudlinux_os_components/#ruby-selector"}},[e._v("See more")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Python Selector")])]),e._v(" "),o("p",[e._v("Python Selector allows end users to choose the Python version for applications and install additional modules. Python Selector uses "),o("code",[e._v("mod_passenger")]),e._v(" to get the best performance from Python applications.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/cloudlinux_os_components/#python-selector"}},[e._v("See more")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("span",{staticClass:"notranslate"},[o("strong",[e._v("Node.js Selector")])])]),e._v(" "),o("p",[e._v("Node.js Selector is a CloudLinux component that allows each user to easily create Node.js applications, choose Node.js version and other parameters for applications based on their needs.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/cloudlinux_os_components/#node-js-selector"}},[e._v("See more")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Apache mod_lsapi PRO")])]),e._v(" "),o("p",[e._v("Mod_lsapi PRO is the fastest PHP handler for Apache. It is a drop-in replacement for SuPHP, FCGID, RUID2, and ITK. It has a low memory footprint and understands "),o("code",[e._v(".htaccess")]),e._v(" PHP directives.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/cloudlinux_os_components/#apache-mod-lsapi-pro"}},[e._v("See more")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Reseller limits")])]),e._v(" "),o("p",[e._v("Reseller limits is a feature that allows hosters to set limits for the resources each Reseller can operate with. Server admin also provides controls on what resources each end user will have. Reseller limits set by a hoster limit the total amount of resources resellers’ end users can consume altogether.")]),e._v(" "),o("p",[e._v("When a hoster has set reseller limits for the particular reseller he provides the reseller with an ability to set limits for his end users within the Reseller Interface.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/cloudlinux_os_components/#reseller-limits"}},[e._v("See more")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("span",{staticClass:"notranslate"},[o("strong",[e._v("LVE-stats 2")])])]),e._v(" "),o("p",[o("span",{staticClass:"notranslate"},[e._v(" LVE-stats 2 ")]),e._v(" collects LVE usage statistics (CPU, memory, disk space usage) and allows to collect the usage data.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/cloudlinux_os_components/#lve-stats-2"}},[e._v("See more")]),e._v(".")],1)])])])},[],!1,null,null,null);t.default=n.exports}}]);