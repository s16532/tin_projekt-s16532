const ServiceRepository = require('../repository/sequelize/ServiceRepository');

exports.showServiceList = (req, res, next) => {
    ServiceRepository.getServices()
        .then(servs => {
            res.render('pages/service/list', {
                servs: servs,
                navLocation: 'serv'
            });
        });
}

exports.showAddServiceForm = (req, res, next) => {
    res.render('pages/service/form', {
        serv: {},
        formMode: 'createNew',
        pageTitle: 'Nowa usługa',
        btnLabel: 'Dodaj usługę',
        formAction: '/services/add',
        navLocation: 'serv'
    });
}

exports.showEditServiceForm = (req, res, next) => {
    const servId = req.params.serviceId;
    ServiceRepository.getServiceById(servId)
        .then(serv => {
            res.render('pages/service/form', {
                serv: serv,
                formMode: 'edit',
                pageTitle: 'Edycja usługi',
                btnLabel: 'Edytuj usługę',
                formAction: '/services/edit',
                navLocation: 'serv'
            })
        });
}

exports.showServiceDetails = (req, res, next) => {
    const servId = req.params.serviceId;
    ServiceRepository.getServiceById(servId)
        .then(serv => {
            res.render('pages/service/form', {
                serv: serv,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły usługi',
                formAction: '',
                navLocation: 'serv'
            })
        });
}

exports.addService = (req, res, next) => {
    const servData = { ...req.body };
    ServiceRepository.createService(servData)
        .then( result => {
            res.redirect('/services');
        });
};

exports.updateService = (req, res, next) => {
    const servId = req.body.id;
    const servData = { ...req.body };
    ServiceRepository.updateService(servId, servData)
        .then( result => {
            res.redirect('/services');
        });
};

exports.deleteService = (req, res, next) => {
    const servId = req.params.serviceId;
    ServiceRepository.deleteService(servId)
        .then( () => {
            res.redirect('/services');
        });
};