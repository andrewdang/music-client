import React from "react"
import PropTypes from "prop-types"

const EnergyBoltIcon = ({ active }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      aria-labelledby="Energy filter bolt icon"
    >
      <title>Energy filter Bolt icon</title>
      <use
        xlinkHref="#_Image1"
        width="160"
        height="160"
        opacity="0"
        transform="matrix(.93527 0 0 .93527 -24.987 -25.263)"
      />
      <path
        d="M40.7 33.23L9.31 64.39l30.963-15.268L56.78 64.957 87.83 33.8l-30.9 15.224L40.7 33.23z"
        fill={active ? "var(--purple)" : "var(--black)"}
        stroke="none"
        transform="scale(0.5) translate(50, 50)"
      />
      <defs>
        <image
          id="_Image1"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADD0lEQVR4nO3ULc/kZBiG4QtCAgZJSNasxBBQKPSKdxGjZgUSgUQOQZCAI6OR+w8qNmMwgMTsruF3IFeBATMlTTOfbWfapz0OWfHclzjTBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOGG7qh62q+rzsXcMYbuqHm1X1Udj7zjmnbEHTM12VT0keZHk7+2qerrZrf8Ye1MX21X1KMm3Sf5Jshl5zlFvjT1gShrxvbv/9CbJQ0kRNsL7OsnzJN9sdut/x111nAD3DsRXKyLCVnjvJfk5E48vEWCSk/HVJhvhgfCSQuJLBHhJfLVJRXgkvKSg+JKFB3hFfLXRIzwRXlJYfMmCA+wQX22UCM+ElxQYX7LQAHvEV7tbhBeElxQaX7LAAAeIr3bTCC8MLyk4vmRhAQ4YX23wCK8ILyk8vmRBAd4gvtogEV4ZXjKD+JKFBHjD+GqdI+wQXjKT+JIFBHiH+GpXRdgxvGRG8SUzD/CO8dXORtgjvGRm8SUzDnCE+GoHI+wZXjLD+JKZBjhifLX/IxwgvGSm8SUzDHCg+F4neZzkgx5vvElSJfky3cNLZhxfkrw99oAhDRDfqyRfbHbrz5I8SfJXjznvJ/kq4jtpNn/AnvG9SvLDZrf+pfXmp0l+Tb8/YVezjy+ZSYA94jsYXuvtMSJcRHzJDALsGN/Z8Fo37hnhYuJLCg+wQ3xXhde6dY8IFxVfUnCAV8bXObzWzVtGuLj4kkIDvCK+QcJr3b5FhIuMLykwwAvjGzy81oZPkvyWYSJcbHxJYQFeEN9Nw2ttGSLCRceXFBTgmfjuFl5rU58IFx9fUkiAJ+IbJbymjhGKb2/yAR6Jb/Twmq6MUHwNkw7wQHyTCq/pwgjF1zLZAFvxvUzy4xTDazoTofgOmGSAjfj+TAHhNR2JUHxHTC7AfXzfJfmppPCaWhGK74RJBbhdVR8m+XizW/8+9pa+9hE+S/K9+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbvP0YTlYLvG36jAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  )
}

EnergyBoltIcon.propTypes = {
  active: PropTypes.bool.isRequired
}

export default EnergyBoltIcon
