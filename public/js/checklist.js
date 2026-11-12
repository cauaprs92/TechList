// Guarda no próprio aparelho (localStorage) o que já foi marcado em cada checklist.

(function () {
  'use strict';

  function storageKey(slug) {
    return 'techlist:' + slug;
  }

  // Devolve um objeto { idDoItem: true } com os itens marcados.
  function loadState(slug) {
    try {
      var saved = JSON.parse(localStorage.getItem(storageKey(slug)));
      return saved && typeof saved === 'object' ? saved : {};
    } catch (error) {
      return {};
    }
  }

  function saveState(slug, state) {
    try {
      localStorage.setItem(storageKey(slug), JSON.stringify(state));
    } catch (error) {
      // Sem armazenamento (ex.: navegação privada): a página segue funcionando,
      // só não lembra as marcações depois de fechada.
    }
  }

  function plural(count, singular, pluralForm) {
    return count === 1 ? singular : pluralForm;
  }

  // ----- Tela de uma checklist -----

  function setupChecklist(page) {
    var slug = page.dataset.checklist;
    var inputs = Array.prototype.slice.call(page.querySelectorAll('[data-item-id]'));
    var total = inputs.length;

    var countLabel = page.querySelector('[data-progress-count]');
    var bar = page.querySelector('[data-progress-bar]');
    var fill = page.querySelector('[data-progress-fill]');
    var actionBar = document.querySelector('.action-bar');
    var status = document.querySelector('[data-status]');
    var resetButton = document.querySelector('[data-reset]');

    var state = loadState(slug);

    function render() {
      var done = inputs.filter(function (input) {
        return input.checked;
      }).length;
      var remaining = total - done;
      var complete = total > 0 && remaining === 0;

      countLabel.textContent = done + ' de ' + total;
      fill.style.width = (total ? (done / total) * 100 : 0) + '%';
      bar.setAttribute('aria-valuenow', String(done));
      bar.classList.toggle('is-complete', complete);
      actionBar.classList.toggle('is-complete', complete);
      resetButton.disabled = done === 0;

      status.textContent = complete
        ? 'Pronta para entrega'
        : plural(remaining, 'Falta ', 'Faltam ') + remaining + plural(remaining, ' item', ' itens');
    }

    inputs.forEach(function (input) {
      input.checked = state[input.dataset.itemId] === true;

      input.addEventListener('change', function () {
        if (input.checked) {
          state[input.dataset.itemId] = true;
        } else {
          delete state[input.dataset.itemId];
        }
        saveState(slug, state);
        render();
      });
    });

    resetButton.addEventListener('click', function () {
      if (!window.confirm('Desmarcar todos os itens desta checklist?')) return;

      state = {};
      inputs.forEach(function (input) {
        input.checked = false;
      });
      saveState(slug, state);
      render();
    });

    render();
  }

  // ----- Tela inicial: mostra o andamento de cada checklist -----

  function setupHomeCounts() {
    document.querySelectorAll('[data-progress-slug]').forEach(function (label) {
      var ids = label.dataset.itemIds.split(',').filter(Boolean);
      var state = loadState(label.dataset.progressSlug);
      var done = ids.filter(function (id) {
        return state[id] === true;
      }).length;

      if (done === 0) return; // mantém o texto "N itens"

      label.textContent = done + ' de ' + ids.length;
      label.classList.toggle('is-complete', done === ids.length);
    });
  }

  var checklistPage = document.querySelector('[data-checklist]');
  if (checklistPage) setupChecklist(checklistPage);
  setupHomeCounts();

  // Ao voltar pela navegação do Safari a página vem do cache; atualiza os números.
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) setupHomeCounts();
  });
})();
