(function () {
  "use strict";

  function create(options) {
    var adapter = options.adapter;
    var previewElement = options.previewElement;
    var countElement = options.countElement;
    var lightboxElement = options.lightboxElement;
    var lightboxImage = options.lightboxImage;
    var lightboxCaption = options.lightboxCaption;

    function openLightbox(photo) {
      if (!lightboxElement || !lightboxImage || !lightboxCaption) {
        return;
      }

      lightboxImage.removeAttribute("src");
      lightboxImage.alt = photo.alt;
      lightboxCaption.textContent = photo.caption;
      lightboxElement.hidden = false;
      document.body.style.overflow = "hidden";
      lightboxImage.src = photo.full;
    }

    function closeLightbox() {
      if (!lightboxElement || !lightboxImage) {
        return;
      }

      lightboxElement.hidden = true;
      lightboxImage.removeAttribute("src");
      document.body.style.overflow = "";
    }

    function createEmptyState() {
      var empty = document.createElement("div");
      empty.className = "photo-empty";
      empty.textContent = "No photos yet";
      return empty;
    }

    function createPhotoButton(group, image, title, isFeatured) {
      var paths = adapter.getPhotoPaths(group, image);
      var button = document.createElement("button");
      var img = document.createElement("img");
      var caption = document.createElement("span");

      button.type = "button";
      button.className = "photo-button" + (isFeatured ? " featured" : "");
      button.setAttribute("aria-label", "Open photo: " + (image.caption || title));

      img.src = paths.thumb;
      img.alt = image.caption || title;
      img.loading = "lazy";
      img.decoding = "async";

      img.addEventListener("error", function () {
        if (img.dataset.fallbackUsed !== "true") {
          img.dataset.fallbackUsed = "true";
          img.src = paths.full;
          return;
        }

        button.innerHTML = "";
        var error = document.createElement("div");
        error.className = "photo-error";
        error.textContent = "Image not found";
        button.appendChild(error);
      });

      caption.className = "photo-caption";
      caption.textContent = image.caption || title;

      button.appendChild(img);
      button.appendChild(caption);
      button.addEventListener("click", function () {
        openLightbox({
          full: paths.full,
          alt: image.caption || title,
          caption: image.caption || title
        });
      });

      return button;
    }

    function render(step) {
      var presentation = adapter.getPresentation(step);
      var group = adapter.getMediaGroupForStep(step.stepId);
      var images = group && Array.isArray(group.images) ? group.images.slice(0, presentation.photoLimit) : [];

      previewElement.innerHTML = "";
      previewElement.className = "photo-preview";
      if (countElement) {
        countElement.textContent = images.length + (images.length === 1 ? " photo" : " photos");
      }

      if (!group || images.length === 0) {
        previewElement.classList.add("empty");
        previewElement.appendChild(createEmptyState());
        return;
      }

      if (images.length === 1) {
        previewElement.classList.add("single");
        previewElement.appendChild(createPhotoButton(group, images[0], step.title, true));
        return;
      }

      previewElement.appendChild(createPhotoButton(group, images[0], step.title, true));

      var stack = document.createElement("div");
      stack.className = "photo-stack";
      images.slice(1, 3).forEach(function (image) {
        stack.appendChild(createPhotoButton(group, image, step.title, false));
      });
      previewElement.appendChild(stack);
    }

    if (lightboxElement) {
      lightboxElement.addEventListener("click", function (event) {
        if (event.target.hasAttribute("data-lightbox-close")) {
          closeLightbox();
        }
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && lightboxElement && !lightboxElement.hidden) {
        closeLightbox();
      }
    });

    return {
      render: render,
      closeLightbox: closeLightbox
    };
  }

  window.TexasTracePhotoController = {
    create: create
  };
})();
