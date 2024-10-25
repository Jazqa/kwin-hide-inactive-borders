function init() {
  workspace.stackingOrder.forEach(addWindow);
  workspace.windowAdded.connect(addWindow);
}

function addWindow(window) {
  if (window.managed && window.normalWindow) {
    window.activeChanged.connect(() => hideWindowBorders(window));
    hideWindowBorders(window);
  }
}

function hideWindowBorders(window) {
  if (window.internalId === workspace.activeWindow?.internalId) {
    window.noBorder = false;
  } else {
    window.noBorder = true;
  }
}

init();
