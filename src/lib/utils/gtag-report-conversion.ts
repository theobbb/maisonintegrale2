export function gtag_report_conversion(url) {
	const callback = () => {
		if (typeof url != 'undefined') {
			window.location = url;
		}
	};
	gtag('event', 'conversion', {
		send_to: 'AW-16865001278/MJQ4CNPX_KEaEL7-7ek-',
		event_callback: callback
	});
	return false;
}
