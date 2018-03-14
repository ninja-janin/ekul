
$(document).ready(function() {
	let images = $('.slider .images img')
	let images_container = $('.slider .images')
	let dots = $('.dots')
	let prev = $('.prev')
	let next = $('.next')
	let current_slide = 0

	function update_dots() {
		// Remove old dots
		dots.empty()

		// How many images do we have?
		for (let i = 0, len = images.length; i < len; i++) {
			let dot = $('<div class="dot"></div>')

			if (i == current_slide) {
				dot.addClass('active')
			}

			// Add the dots
			dots.append(dot)
		}
	}

	function move_slider(direction) {
		// Uknow
		if (direction == 'next') {
			current_slide++
		}

		// Uknow
		if (direction == 'prev') {
			current_slide--
		}

		// Check bounds
		if (current_slide == images.length) {
			current_slide = 0
		} else if (current_slide < 0) {
			current_slide = images.length - 1
		}

		images_container.animate({
			left: (current_slide * -100) + '%'
		})

		update_dots()
	}

	// Set image size
	images.width((100 / images.length) + '%')

	// Set the container width
	images_container.width((100 * images.length) + '%')

	// Call the update_dots first time
	update_dots()

	// Move the dot container
	dots.css('margin-left', (dots.width()*-0.5))

	// Add the callbacks
	prev.click(function(){
		move_slider('prev')
	})

	// Add the callbacks
	next.click(function(){
		move_slider('next')
	})
})
